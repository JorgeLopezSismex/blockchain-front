import * as yup from "yup";
 export const validationRequestScheme = yup.object().shape({
    legal_name: yup
        .string()
        .required("Es necesario otrogar la razón social."),
    zip_code: yup
        .string()
        .required("Ingrese su código postal.")
        .min(5,"Ingrese un código postal valido.")
        .max(5,"Ingrese un código postal valido."),
    country: yup
        .string()
        .required("Aun no ha ingresado su código postal."),
    state: yup
        .string()
        .required("Aun no ha ingresado su código postal."),
    city: yup
        .string()
        .required("Aun no ha ingresado su código postal."),
    suburb: yup
        .string()
        .required("Ingrese la colonia."),
    street: yup
        .string()
        .required("Ingrese la la calle."),
    external_number: yup
        .string()
        .required("Es necesario el número exterior"),
    internal_number: yup
        .string(),
    email: yup
        .string()
        .required("Este campo es obligatorio.")
        .email("Por favor, escribe una dirección de correo válida.")
        .min(5, "Por favor, no escribas menos de 5 caracteres.")
        .max(150, "Por favor, no escribas más de 150 caracteres."),
    phone: yup
        .number()//Revisa este :v
        .required("Este campo es obligatorio.")
        .max(10, "Ingrese un número de contacto valido."),
    description: yup
        .string()
        .required("Es necesaria una descripción.")
        .min(8, "Por favor, no escribas menos de 8 caracteres.")
        .max(250, "Por favor, no escribas más de 16 caracteres."),
    tax_id: yup.mixed().required("Este campo es obligatorio."),
    rfc: yup
        .string()
        .required("Este campo es obligatorio.")
        .min(12, "Ingrese un RFC valido.")
        .max(13, "Ingrese un RFC valido."),
    constitutive_act: yup.mixed().required("Este campo es obligatorio."),
    tax_situation_statement: yup.mixed().required("Este campo es obligatorio."),
 });

 //Esquema de validación para añadir casos de clientes
 const supportedImageTypes = ['image/jpeg', 'image/png']; 
 export const clientAddSchema = yup.object().shape({
    name: yup
      .string()
      .required("Este campo es obligatorio.")
      .min(5, "Por favor, no escribas menos de 5 caracteres.")
      .max(150, "Por favor, no escribas más de 150 caracteres."),
    job: yup
      .string()
      .required("Este campo es obligatorio.")
      .min(5, "Por favor, no escribas menos de 5 caracteres.")
      .max(100, "Por favor, no escribas más de 150 caracteres."),
    city: yup
      .string()
      .required("Este campo es obligatorio.")
      .min(5, "Por favor, no escribas menos de 5 caracteres.")
      .max(150, "Por favor, no escribas más de 150 caracteres."),
    text: yup
      .string()
      .required("Es necesaria una descripción.")
      .min(8, "Por favor, no escribas menos de 8 caracteres.")
      .max(250, "Por favor, no escribas más de 16 caracteres."),
    // image: yup.mixed().required("Este campo es obligatorio."),
    image: yup
      .mixed()
      .test('fileRequired', 'Debes subir una imagen', (value) => {
        return value instanceof File;
      })
      .test('fileType', 'El archivo debe ser una imagen', (value) => {
        if (value) {
          return supportedImageTypes.includes(value.type);
        }
        return true; // Permite que el campo sea nulo (sin archivo)
      })
      .required('Este campo es obligatorio'),
 });

 //Esquema de validación para enviar invitaciones
 const supportedFileTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
 export const sendInvitationSchema = yup.object().shape({
    file: yup
      .mixed()
      .test('fileRequired', 'Debes subir un archivo Excel', (value) => {
        return value instanceof File;
      })
      .test('fileType', 'El archivo debe ser Excel', (value) => {
        if (value) {
          return supportedFileTypes.includes(value.type);
        }
        return true; // Permite que el campo sea nulo (sin archivo)
      })
      .required('Este campo es obligatorio'),
 });