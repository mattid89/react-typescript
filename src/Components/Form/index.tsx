import useFormulario from "src/Hooks/UseFormulario";
import CustomInput from "./Input";

const Formulario = () => {
	const [formulario, handleChange] = useFormulario({ name: '', apellido: '', email: '' })
	console.log(formulario)
  return (
    <form>
      <CustomInput
				label="Nombre"
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
      />

      <CustomInput
				label="Apellido"
        name="apellido"
        placeholder="Apellido"
        value={formulario.apellido}
        onChange={handleChange}
      />
    </form>
  );
};

export default Formulario;
