import { useField } from "formik";

const TextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

	// console.log(field, meta);
  return (
    <div>
      <label>{label}</label>
      <input {...field} />
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
