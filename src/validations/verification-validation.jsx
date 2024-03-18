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

export const verificationSecondsStepSchema = yup.object().shape({
  legalName: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  zipCode: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(5, "Por favor, no escribas más de 5 caracteres."),
  country: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  state: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  city: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  suburb: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  street: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  internalNumber: yup
    .string()
    .nullable()
    .min(2, "Por favor, no escribas menos de 2 caracteres.")
    .max(10, "Por favor, no escribas más de 10 caracteres."),
  externalNumber: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(2, "Por favor, no escribas menos de 2 caracteres.")
    .max(10, "Por favor, no escribas más de 10 caracteres."),
  email: yup
    .string()
    .required("Este campo es obligatorio.")
    .email("Por favor, escribe una dirección de correo válida.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  phone: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  rfc: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(15, "Por favor, no escribas más de 15 caracteres."),
  description: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  constitutiveAct: yup
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
  taxSituationStatement: yup
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
