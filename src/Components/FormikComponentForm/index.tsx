import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./TextInput";

const FormikComponentForm = () => {
  const initialValue: FormData = {
    name: "",
    lastname: "",
    email: "",
  };

  const handleValidate = (values: any) => {
    const errors = {} as FormData;

    if (!values.name) {
      errors.name = "Requerido";
    } else if (values.name.length < 5) {
      errors.name = "El nombre es muy corto";
    }

    if (!values.lastname) {
      errors.lastname = "Requerido";
    } else if (values.lastname.length < 5) {
      errors.lastname = "El apellido es muy corto";
    }

    if (!values.email) {
      errors.email = "Requerido";
    } else if (values.email.length < 5) {
      errors.email = "El email es muy corto";
    }

    return errors;
  };

  const handleSubmit = (value: any) => console.log(value);

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validate={handleValidate}
    >
      <Form className="flex-column padding">
        {/* COMPONENTE CUSTOM CONECTADO CON FORMIK => Me permite también manejar los estilos de los componentes */}
        <TextInput name="name" label="Nombre" />

        <br />

        {/* <label>Nombre</label>
        <Field name="name" type="text" />
        <Field name="select" as="select" className="input">
          <option value="opcion1">Opcion 1</option>
          <option value="opcion2">Opcion 2</option>
        </Field>
        <ErrorMessage name="name" /> */}

        <label>Apellido</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name="lastname" />

        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <Button type="submit" size="large" variant="contained">
          Enviar
        </Button>
      </Form>
    </Formik>
  );
};

export default FormikComponentForm;


interface FormData {
  name: string;
  lastname: string;
  email: string;
}
