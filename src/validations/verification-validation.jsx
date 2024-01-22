import * as yup from "yup";

export const verificationFirstStepSchema = yup.object().shape({
  name: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  taxId: yup
    .mixed()
    .required("Este campo es obligatorio.")
    .test("fileFormat", "Por favor, ingresa un archivo .pdf", (value) => {
      if (!value) return true;
      const allowedFileTypes = ["application/pdf"];

      return allowedFileTypes.includes(value.type);
    })
    .test(
      "fileSize",
      "Por favor, ingresa un archivo de menos de 10 MB",
      (value) => {
        if (!value) return true;
        const maxSizeInBytes = 10 * 1024 * 1024;

        return value.size <= maxSizeInBytes;
      }
    ),
});
