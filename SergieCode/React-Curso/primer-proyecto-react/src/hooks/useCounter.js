import { useState } from "react";

export const useCounter = (valorInicial) => {
    const [counter, setCounter] = useState(valorInicial)
    const increment = (valor = 1) => {
        setCounter(counter + valor)
    }
    const decrement = (valor = 1) => {
        setCounter(counter - valor)
    }
    const reset = () => {
        setCounter(valorInicial)
    }




    return {
        counter,
        increment,
        decrement,
        reset
    }
}
