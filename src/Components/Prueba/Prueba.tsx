import React, { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import './Prueba.css'

const Prueba = ({ title, children }: { title: string, children: ReactNode }) => {

    const INITIAL_STATE = 1
    
    const [numero, setNumero] = useState(INITIAL_STATE)
    

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setNumero(numero + 1)

    return (
        <>
          <h4>{title}</h4>  
          <div>{children}</div>
          <button id="one" onClick={ (event) => handleClick(event) }>Apretar {numero}</button>
        </>
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