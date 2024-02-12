import * as yup from "yup";

export const createTemplateScheme = yup.object().shape({
  name: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(100, "Por favor, no escribas más de 100 caracteres."),
  //   html: yup.string().required("Este campo es obligatorio."),
  //   design: yup.object().required("Este campo es obligatorio."),
});
