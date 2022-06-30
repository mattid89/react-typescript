import { useState } from "react";
import useFormulario from "src/Hooks/UseFormulario";
import { FormularioData } from "src/Models/FormularioData";
import Button from "./button";
import Input from "./Input";

const Formulario = () => {
  const initialObject = {
    name: "",
    apellido: "",
    email: "",
  };
  const [usuarios, setUsuarios] = useState<FormularioData[]>([])
  const [formulario, handleChange] = useFormulario(initialObject);

  const submit = (e: any) => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ])
    return {}
  }

  console.log(formulario);
  return (
    <form onSubmit={submit}>
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

export default Formulario;
