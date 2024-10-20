import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"


export const CallBackComponet = () => {
    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback((val) => {
        setCounter(c => c + val)
    }, [])


    return (
        <>
            <h1>CallBack Component</h1>
            <p>Counter: {counter}</p>
            <Incrementar incrementar={incrementarPadre}></Incrementar>
        </>
    )
}
