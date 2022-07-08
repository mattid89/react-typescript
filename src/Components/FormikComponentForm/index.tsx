import CheckBox from "./Checkbox"
import { Button } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import TextInput from "./TextInput";
import Select from "./Select";
import RadioButton from "./RadioButton";

const FormikComponentForm = () => {
  const initialValue: FormData = {
    name: '',
    lastname: '',
    email: '',
    sexo: '',
    subscripciones: '',
    accept: false
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

    if (values.sexo === '') {
      errors.sexo = "Requerido";
    }

    if (values.subscripciones === "") {
      errors.subscripciones = "Requerido";
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
        {/* Custom Fields */}
        <TextInput name="name" label="Nombre" />
        <TextInput name="lastname" label="Apellido" />
        <TextInput name="email" label="Email" type="email" />
        <Select name="sexo" label="Sexo">
          <option value="">Seleccione Sexo</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="niidea">Ni idea</option>
        </Select>
        <span className="mg05rem">
          <label>Newsletter</label>
          <RadioButton name="subscripciones" label="No quiero recibir nada" value="no" />
          <RadioButton name="subscripciones" label="Semanalmente" value="semanal" />
          <RadioButton name="subscripciones" label="Diariamente" value="diario" />
          <RadioButton name="subscripciones" label="Solo novedades de verdad" value="news" />
          <ErrorMessage name="subscripciones" />
        </span>
        <CheckBox name="accept"> Aceptar términos y condiciones</CheckBox>

        <hr />

        {/* <label>Nombre</label>
        <Field name="name" type="text" />
        <Field name="select" as="select" className="input">
          <option value="opcion1">Opcion 1</option>
          <option value="opcion2">Opcion 2</option>
        </Field>
        <ErrorMessage name="name" /> */}

        {/* <label>Apellido</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name="lastname" />

        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" /> */}

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
  sexo: string;
  subscripciones: string;
  accept: boolean;
}
