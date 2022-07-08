import { useField } from "formik";

const Checkbox = ({ children, label, ...props }: any) => {
	  const [field, meta] = useField({ ...props, type: 'checkbox' });

    // console.log(field, meta);
    return (
      <div className="mg05rem">
        <label>
          <input type="checkbox" {...field} />
          {children}
          {meta.touched && meta.error ? <small>{meta.error}</small> : null}
        </label>
      </div>
    );
}

export default Checkbox