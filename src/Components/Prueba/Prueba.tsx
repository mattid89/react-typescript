import React, { ReactNode, useState } from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import './Prueba.css'


const Prueba = ({ title, children }: { title: string, children: ReactNode }) => {

    const INITIAL_STATE = 1
    
    const [numero, setNumero] = useState(INITIAL_STATE)
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setNumero(numero + 1)

    return (
        <div className="flex-column padding">
          <h4>{title}</h4>  
          <div>{children}</div>
          <Button onClick={(event) => handleClick(event)} variant="contained">Apretar {numero}</Button>
        </div>
    )
}

Prueba.propTypes = {
    title: PropTypes.string.isRequired
}

Prueba.defaultProps = {
    title: "Título default"
}


export default Prueba





// interface Lala {
//     items: "loading" | number[] | Error
// }

// const a = (): Lala => ({ items: "loading" })



// const imprimirVillano = () => {
//     let villano: "bueno" | "malo" | "muy malo"

//     villano = ""

//     console.log(villano)
// }