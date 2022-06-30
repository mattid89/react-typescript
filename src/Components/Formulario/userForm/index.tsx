import useFormulario from "src/Hooks/UseFormulario";
import Button from "../button";
import Input from "../Input";

const UserForm = ({ submit }: any) => {
  const initialObject = {
    name: "",
    apellido: "",
    email: "",
  };

  const [formulario, handleChange, reset] = useFormulario(initialObject);

	const handleSubmit = (e: any) => {
    e.preventDefault();
    submit(formulario);
    reset();
	}

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
      />

      <Input
        label="Apellido"
        name="apellido"
        placeholder="Apellido"
        value={formulario.apellido}
        onChange={handleChange}
      />

      <Input
        label="Email"
        name="email"
        placeholder="Email"
        value={formulario.email}
        onChange={handleChange}
      />

      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
