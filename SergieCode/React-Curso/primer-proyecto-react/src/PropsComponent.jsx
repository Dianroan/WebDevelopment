import PropTypes from 'prop-types'



export const PropsComponent = ({ titulo, numero }) => {
    return (
        <>
            <h1>Props Component el titulo es: {titulo}</h1>
            <h2>Props Component el numero es: {numero}</h2>
        </>
    )
}

PropsComponent.propTypes = {
    titulo: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
}

PropsComponent.defaultProps = {
    titulo: 'ola',
    numero: 0

}