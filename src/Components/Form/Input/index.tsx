import './Input.css'

const CustomInput = ({ label, ...inputAttr }: any) => {
  return (
    <div className='field'>
      <label>{label}</label>
      <input {...inputAttr} />
    </div>
  );
};

export default CustomInput