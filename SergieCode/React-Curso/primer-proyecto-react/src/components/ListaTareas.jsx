import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

const initialState = [{
    id: new Date().getTime(),
    tarea: 'Explicar Reducer',
    finalizada: false
}]
/*
const nuevaTarea = {
    id: 2,
    tarea: 'Crear componente',
    finalizada: false
}
*/
/*
const agregarTarea = {
    type: '[TAREAS] AGREGAR_TAREA',
    payload: nuevaTarea
}
*/
const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] AGREGAR_TAREA':
            console.log('agrear')
            return [...state, action.payload];
        case '[TAREAS] FINALIZAR_TAREA':
            console.log('finalizar')
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                } return tarea
            })
        case '[TAREAS] ELIMINAR_TAREA':
            console.log('eliminar')
            return state.filter(tarea => tarea.id !== action.payload)
        case '[TAREAS] BORRAR_TAREA':
            console.log('borrar todo')
            return []
        default:
            return state;
    }
}


export const ListaTareas = () => {
    const [state, dispatch] = useReducer(tareaReducer, initialState)
    const { tarea, formState, onInputChange } = useForm({ tarea: '' })

    const agregarTareaForm = (event) => {
        event.preventDefault()
        if (formState.tarea == '') return
        console.log(formState)
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] AGREGAR_TAREA',
            payload: tarea
        }
        dispatch(action)
    }

    const finalizarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] FINALIZAR_TAREA',
            payload: id
        }
        dispatch(action)
    }
    const eliminarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] ELIMINAR_TAREA',
            payload: id
        }
        dispatch(action)
    }
    const reset = () => {
        const action = {
            type: '[TAREAS] BORRAR_TAREA',
        }
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregarTareaForm}>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="Inresa tarea"
                        value={tarea}
                        onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Reset List</button>
            </form >
            <hr />
            <ul className="list-group">
                {state.map(item => {
                    return (
                        <li className="list-group-item d-flex justify-content-between"
                            key={item.id}>
                            <span className="float-left">{item.tarea}{item.finalizada ? '👌' : '😎'}</span>
                            <div>
                                <input type="checkbox" value={item.finalizada} onChange={() => finalizarTarea(item)} />
                                <button className="btn btn-danger" onClick={() => eliminarTarea(item)}>Borrrar</button>
                            </div>
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}
