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

  const reset = () => setFormulario(inicial)
	
	return [formulario, handleChange, reset]
}

export default useFormulario