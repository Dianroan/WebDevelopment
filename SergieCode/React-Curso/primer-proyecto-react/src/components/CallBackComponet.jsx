import { useState } from "react"
import { Incrementar } from "./Incrementar"


export const CallBackComponet = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <Incrementar></Incrementar>
        </>
    )
}
