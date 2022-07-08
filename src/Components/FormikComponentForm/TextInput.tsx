import { useField } from "formik";

const TextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

	// console.log(field, meta);
  return (
    <div>
      <label>{label}</label>
      <input {...field} {...props} />
			{meta.touched && meta.error ? <small>{meta.error}</small> : null}
    </div>
  );
};

export default TextInput;
