import { useMemo, useState } from "react";



export const CalculosPesados = () => {


    const [listaNumeros, setListaNumeros] = useState([2, 3, 4, 5, 6, 7, 8, 9])
    const [show, setShow] = useState(true)

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
    }

    const getCalculo = (listaNumeros) => useMemo(() => {
        console.log("calculando");
        return listaNumeros.reduce((a, b) => a * b)
    }, [listaNumeros])

    return (
        <>
            <h1>Calculos Pesados</h1>
            <p>{getCalculo(listaNumeros)}</p>
            <button onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
            <button onClick={() => agregarNumero()}>Agregar Numero</button>

        </>
    )
}
