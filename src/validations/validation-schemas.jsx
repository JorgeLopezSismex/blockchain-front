import * as yup from "yup";
import { apiFetch } from "@/helpers/api-fetch";

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
    .max(100, "Por favor, no escribas más de 150 caracteres.")
    .test(
      "Esta dirección de correo es válida.",
      "Esta dirección de correo ya esta en uso.",
      async (value, values) => {
        const res = await apiFetch("authorization/registered-email", "POST", {
          email: value,
        });

        return res.success ? true : false;
      }
    ),
  password: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(8, "Por favor, no escribas menos de 8 caracteres.")
    .max(16, "Por favor, no escribas más de 50 caracteres.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!*]).{8,}$/,
      "Por favor, la contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
    ),
  repeatPassword: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(8, "Por favor, no escribas menos de 8 caracteres.")
    .max(16, "Por favor, no escribas más de 16 caracteres.")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("Este campo es obligatorio.")
    .email("Por favor, escribe una dirección de correo válida.")
    .min(5, "Por favor, no escribas menos de 5 caracteres.")
    .max(150, "Por favor, no escribas más de 150 caracteres."),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(8, "Por favor, no escribas menos de 8 caracteres.")
    .max(16, "Por favor, no escribas más de 50 caracteres.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!*]).{8,}$/,
      "Por favor, la contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
    ),
  repeatPassword: yup
    .string()
    .required("Este campo es obligatorio.")
    .min(8, "Por favor, no escribas menos de 8 caracteres.")
    .max(16, "Por favor, no escribas más de 16 caracteres.")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});
