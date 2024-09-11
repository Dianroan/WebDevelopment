import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {
    const { counter, increment, decrement, reset } = useCounter(0)

    return (
        <>
            <p>Contador: {counter}</p>
            <button onClick={() => increment(1)}>+1</button>
            <button onClick={() => decrement(1)}>-1</button>
            <button onClick={() => reset()}>Reset</button>
        </>
    )
}
