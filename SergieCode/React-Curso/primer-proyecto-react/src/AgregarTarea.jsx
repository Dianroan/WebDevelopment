import { useState } from "react"
import PropTypes from 'prop-types'

export const AgregarTarea = ({ agregarTarea }) => {
    const [inputValue, setInputValue] = useState("")
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)
    }
    return (
        <>
            <h1>Agregar Tarea</h1>
            <form onSubmit={onSubmit}>
                <input type="text"
                    placeholder="Ingresa tarea nueva"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}

AgregarTarea.propTypes = {
    agregarTarea: PropTypes.func.isRequired
}