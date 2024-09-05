import PropTypes from 'prop-types'
import { useState } from 'react';

export const ContadorApp = ({ value }) => {
    const [contador, setContador] = useState(value);

    const handleClick = () => {
        setContador(contador + 1)
        /*
        value += 1
        console.log(value)*/
    }
    return (
        <>
            <h1>Contador App</h1>
            <p>{contador}</p>
            <button onClick={handleClick}>
                Soy un boton
            </button>
        </>
    );
};

ContadorApp.propTypes = {
    value: PropTypes.number.isRequired
}