import './Input.css'

const Input = ({ label, ...inputAttr }: any) => {
  return (
    <div className='field'>
      <label>{label}</label>
      <input {...inputAttr} />
    </div>
  );
};

export default Input