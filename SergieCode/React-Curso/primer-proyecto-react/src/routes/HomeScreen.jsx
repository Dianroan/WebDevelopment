import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

export const HomeScreen = () => { 
    const { usuario } = useContext(UsuarioContext)
    return (
        <>
            <p>El usuario es: {usuario.userName}</p>
        </>
    )
}
