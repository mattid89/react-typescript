import { useState } from "react";
import { FormularioData } from "src/Models/FormularioData";
import UserForm from "./userForm";

const Formulario = () => {
  const [usuarios, setUsuarios] = useState<FormularioData[]>([])

  const submit = (usuario: FormularioData) => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }
  
  return (
    <div className="flex-column padding">
      <UserForm submit={submit} />
      <hr />
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.email}>
            {usuario.name} {usuario.apellido} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Formulario;
