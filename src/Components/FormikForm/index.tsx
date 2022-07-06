import { Button } from "@mui/material";
import { useFormik } from "formik"

const FormikForm = () => {

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

	const formik = useFormik({
		initialValues: initialValue,
    validate: handleValidate,
		onSubmit: handleSubmit
	})

	return (
    <form onSubmit={formik.handleSubmit} className="flex-column padding">
      <label>Nombre</label>
      <input
        type="text"
        {...formik.getFieldProps("name")}
        // name="name"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <small>{formik.errors.name}</small>
      ) : null}

      <label>Apellido</label>
      <input
        type="text"
        {...formik.getFieldProps("lastname")}
        // name="lastname"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <small>{formik.errors.lastname}</small>
      ) : null}

      <label>Email</label>
      <input
        type="email"
        {...formik.getFieldProps("email")}
        // name="email"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <small>{formik.errors.email}</small>
      ) : null}

      <Button type="submit" size="large" variant="contained">
        Enviar
      </Button>
    </form>
  );
}

export default FormikForm

// TODO: Video 87

interface FormData {
  name: string,
  lastname: string,
  email: string
}