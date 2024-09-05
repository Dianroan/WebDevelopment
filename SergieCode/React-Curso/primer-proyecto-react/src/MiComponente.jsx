const string = 'Esto es un texto'
const number = 12234
const boolean = true
const array = [1, 2, 3, 4, 5]
const object = { name: 'Juan', age: 25 }
const fecha = new Date();
const funcion = () => 1 + 1

export const MiComponente = () => {
    return (
        <>
            <h1>Hola mundo peroo</h1>
            <p>{1 + 2}</p>
            <p>{string}</p>
            <p>{number}</p>
            <p>{boolean.toString()}</p>
            <p>{array}</p>
            <p>{JSON.stringify(object)}</p>
            <p>{fecha.toLocaleString()}</p>
            <p>{funcion()}</p>
        </>
    );
};
