import { useField } from "formik";

const Checkbox = ({ children, label, ...props }: any) => {
	  const [field, meta] = useField({ ...props, type: 'checkbox' });

    // console.log(field, meta);
    return (
      <div>
        <label>
          <input type="checkbox" {...field} />
          {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </label>
      </div>
    );
}

export default Checkbox