import { useState } from 'react';
import PropTypes from 'prop-types'
import { AgregarTarea } from './AgregarTarea';
const Item = ({ nombre, visto }) => {
    return (
        <li>{nombre}
            {visto ? '👌' : '😎'}</li>
    )
}


export const ListadoApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'Tarea 1', visto: false }])
    }
    let listadoTemas = [
        { id: 1, nombre: 'React', visto: true },
        { id: 2, nombre: 'Angular', visto: false },
        { id: 3, nombre: 'Vue', visto: true }
    ]
    const [arreglo, setArreglo] = useState(listadoTemas)
    const onAgregarTarea = (val) => {
        if (val < 1) return
        const envio = {
            id: arreglo.length + 1,
            nombre: val,
            visto: false
        }
        setArreglo([...arreglo, envio])
    }
    return (
        <>
            <h1>Lista de Temas del curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
            <ol>
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}
            </ol>
            <button onClick={() => addTask()}> Agregar tarea</button>
        </>
    )
}

Item.propTypes = {
    nombre: PropTypes.string.isRequired,
    visto: PropTypes.bool.isRequired
}