import { useField } from "formik";

const Select = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  // console.log(field, meta);
  return (
    <div className="mg05rem">
      <label>{label}</label>
      <select className="mgl05rem" {...field} {...props} />
      {meta.touched && meta.error ? <small>{meta.error}</small> : null}
    </div>
  );
};

export default Select;
