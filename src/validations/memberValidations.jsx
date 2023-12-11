import * as yup from "yup";

export const createMemberScheme = yup.object().shape({
  name: yup
    .string()
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  lastName: yup
    .string()
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  email: yup
    .string()
    .required("Este campo es obligatorio.")
    .email("Por favor, escribe una dirección de correo válida.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  roleId: yup.number().integer().required("Este campo es obligatorio."),
});

export const updateMemberScheme = yup.object().shape({
  name: yup
    .string()
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  lastName: yup
    .string()
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  email: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
});
