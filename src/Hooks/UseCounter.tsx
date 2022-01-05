import { useState } from "react"


const useCounter = (initial: number): [counter: number, incrementar: () => void] => {

      const [contador, setCounter] = useState(initial)

      const incrementar = () => setCounter(contador + 1)

      return [contador, incrementar]
}

export default useCounter