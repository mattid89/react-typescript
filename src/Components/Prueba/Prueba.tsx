import { ReactNode } from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import useCounter from '../../Hooks/UseCounter'
import './Prueba.css'


const Prueba = ({ title, children }: { title: string, children: ReactNode }) => {
    const [counter, incrementar] = useCounter(0)

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
