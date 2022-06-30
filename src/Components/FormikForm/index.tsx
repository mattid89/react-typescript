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
}

export default FormikForm

// TODO: Video 84. Armar formulario