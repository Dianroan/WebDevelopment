import React from "react"
import PropTypes from "prop-types"

export const Incrementar = React.memo(({ incrementar }) => {
    console.log("Me estoy redibujando")

    return (
        <button onClick={() => incrementar(10)}>Incrementar + 1</button>
    )
}
)

Incrementar.displayName = "Incrementar"

Incrementar.propTypes = {
    incrementar: PropTypes.func.isRequired
}