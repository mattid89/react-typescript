import { useReducer } from "react"

const useCounterReducer = () => {

      const initialState: { contador: number } = { contador: 0 }

      const reducer = (state: { contador: number }, action: { type: string, payload: number }) => {
            switch (action.type) {
                  case 'increment': return { contador: state.contador + 1 }
                  case 'decrement': return { contador: state.contador - 1 }
                  case 'set': return { contador: action.payload }
                  default: return state
            }
      }

      return useReducer(reducer, initialState)
}

export default useCounterReducer