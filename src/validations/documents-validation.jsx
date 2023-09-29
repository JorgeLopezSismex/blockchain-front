import * as yup from "yup";

export const uploadDocumentsSchema = yup.object().shape({
  signature: yup.mixed().required("Este campo es obligatorio."),
});

// export const documentScheme = yup.object().shape({
//   title: yup
//     .string()
//     .required("Este campo es obligatorio.")
//     .min(5, "Por favor, no escribas menos de 5 caracteres.")
//     .max(50, "Por favor, no escribas más de 150 caracteres."),
//   description: yup
//     .string()
//     .required("Este campo es obligatorio.")
//     .min(8, "Por favor, no escribas menos de 8 caracteres.")
//     .max(16, "Por favor, no escribas más de 16 caracteres."),
//   email: yup
//     .string()
//     // .required("Ingrese un correo valido.")
//     .email("Por favor, escribe una dirección de correo válida.")
//     .min(5, "Por favor, no escribas menos de 5 caracteres.")
//     .max(150, "Por favor, no escribas más de 150 caracteres."),
//   // file: yup
//   //   .required("Este campo es obligatorio")
// });
