import * as yup from "yup";

export const uploadDocumentsSchema = yup.object().shape({
  signature: yup.mixed().required("Este campo es obligatorio."),
  emails: yup.mixed().required("Este campo es obligatorio."),
  logo: yup.mixed().required("Este campo es obligatorio."),
  degree: yup
    .string()
    .required("Es necesario indicar el grado obtenido.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(50, "Por favor, no escribas más de 150 caracteres."),
  description: yup
    .string()
    .required("Es necesaria una descripción.")
    .min(8, "Por favor, no escribas menos de 8 caracteres.")
    .max(250, "Por favor, no escribas más de 16 caracteres."),
});