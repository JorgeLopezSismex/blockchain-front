import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Este campo es obligatorio.")
    .email("Por favor, escribe una dirección de correo válida.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(150, "Por favor, no escribas más de 150 caracteres."),
  password: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(8, "Por favor, no escribas menos de 8 caracteres.")
    .max(16, "Por favor, no escribas más de 16 caracteres."),
});

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required("Este campo es obligatorio.")
    .email("Por favor, escribe una dirección de correo válida.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(150, "Por favor, no escribas más de 150 caracteres."),
});
