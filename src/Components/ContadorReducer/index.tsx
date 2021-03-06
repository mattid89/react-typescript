import { Alert, Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import useCounterReducer from "./Hooks/UseCounterReducer"


const ContadorReduced = () => {
      const [state, dispatch] = useCounterReducer()
      const [valor, setValor] = useState('0')

      const handleSet = () => {
            dispatch({ type: "set", payload: parseInt(valor) });
      }

      return (
            <div className="oneRemMargin">
                  <Alert severity="success">Contador: {state.contador}</Alert>
                  <Button variant="outlined" onClick={() => dispatch({ type: 'increment', payload: 0 })}>+</Button>
                  <Button variant="outlined" onClick={() => dispatch({ type: 'decrement', payload: 0 })}>-</Button>
                  <Button variant="outlined" onClick={handleSet}>Set</Button>
                  
                  <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }}} noValidate autoComplete="off">
                        <TextField 
                              onChange={(e) => setValor(e.target.value)}
                              value={valor}
                              id="filled-basic" 
                              label="to set" 
                              color="warning"
                              variant="filled" 
                              type="text"
                        />
                  </Box>
            </div>
      )
}

export default ContadorReduced