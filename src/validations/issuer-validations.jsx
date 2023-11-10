import * as yup from "yup";
export const rejectIssuerScheme = yup.object().shape({
  reason: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(150, "Por favor, no escribas más de 150 caracteres."),
});
