import { useState } from "react"


export const useCounter = (inicial = 10 ) => {

    const [counter,setCounter] = useState(inicial);

    const increment = (value = 1)  => {
        setCounter((current) => current + value);
    }

    const reset = () => {
        setCounter(0)
    }

    const decrement = () => {
        setCounter((current) => current -1)
    }

    return {
        counter,
        increment,
        reset,
        decrement,

    }
}