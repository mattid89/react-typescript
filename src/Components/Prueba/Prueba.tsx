import { ReactNode, useEffect } from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import useCounter from '../../Hooks/UseCounter'
import './Prueba.css'


const Prueba = ({ title, children }: { title: string, children: ReactNode }) => {
    const [counter, incrementar] = useCounter(0)

    useEffect(() => {
        const interval = setInterval(() => console.log(counter), 1000) // effect
        return () => clearInterval(interval) // clear effect => por ejemplo desubscribirse para no generar conexiones de más
    }, [counter]) // dependencia

    return (
        <div className="flex-column padding">
          <h4>{title}</h4>  
          <div>{children}</div>
            <Button onClick={incrementar} variant="contained">Apretar {counter}</Button>
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
