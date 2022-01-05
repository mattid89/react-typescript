import { Alert, Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import useCounterReducer from "../../Hooks/UseCounterReducer"


const ContadorReducer = () => {
      const [state, dispatch] = useCounterReducer()
      const [valor, setValor] = useState('0')

      return (
            <div>
                  <Alert severity="success">Contador: {state.contador}</Alert>
                  <Button variant="outlined" onClick={() => dispatch({ type: 'increment', payload: 0 })}>+</Button>
                  <Button variant="outlined" onClick={() => dispatch({ type: 'decrement', payload: 0 })}>-</Button>
                  <Button variant="outlined" onClick={() => dispatch({ type: 'set', payload: parseInt(valor) })}>Set</Button>
                  
                  <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
                        <TextField 
                              onChange={(e) => setValor(e.target.value)}
                              value={valor}
                              id="filled-basic" 
                              label="to set" 
                              variant="filled" 
                              type="text"
                        />
                  </Box>
            </div>
      )
}

export default ContadorReducer