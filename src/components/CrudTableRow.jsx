import propTypes from 'prop-types'

const CrudTableRow = ({el}) => {
    return (
    <tr>
        <td>{el.name}</td>
        <td>{el.producer}</td>
        <td>
            <button>Editar</button>
            <button>Eliminar</button> 
        </td>
    </tr>
    )
}

export default CrudTableRow

CrudTableRow.propTypes = {
    el : propTypes.object
}
