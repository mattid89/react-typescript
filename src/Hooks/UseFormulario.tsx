import { useState } from "react";
import { FormularioData } from "src/Models/FormularioData";

const useFormulario = (inicial: FormularioData): any => {
  const [formulario, setFormulario] = useState<FormularioData>(inicial);
  const handleChange = (e: any) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    })
  }
	
	return [formulario, handleChange]
}

export default useFormulario