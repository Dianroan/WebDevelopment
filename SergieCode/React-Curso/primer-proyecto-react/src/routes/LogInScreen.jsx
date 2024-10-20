import { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { UsuarioContext } from "../context/UsuarioContext"

export const LogInScreen = () => {
    const initialForm = {
        userName: ''
    }

    const { setUsuario } = useContext(UsuarioContext)

    const { formState, userName, onInputChange } = useForm(initialForm)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        setUsuario(formState)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">UserName</label>
                    <input type="text"
                        className="form-control"
                        name="userName"
                        placeholder="Enter user"
                        value={userName}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit"
                    className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
