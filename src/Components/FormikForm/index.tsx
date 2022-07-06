import { useFormik } from "formik"

const FormikForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			lastname: '',
			email: ''
		},
		onSubmit: value => console.log(value)
	})

	return (
    <form onSubmit={formik.handleSubmit} className="flex-column">
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label>Apellido</label>
      <input
        type="text"
        name="lastname"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    </form>
  );
}

export default FormikForm

// TODO: Video 84. Armar formulario

// numero de usuario => 3719483
// telefono => 20340202