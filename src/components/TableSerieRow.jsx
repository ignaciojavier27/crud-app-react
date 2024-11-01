import PropTypes from 'prop-types'
const TableSerieRow = ({serie, setSerieToEdit, deleteSerie}) => {

    const { id, title, producer } = serie

    const handleEdit = (serie) => {
        setSerieToEdit(serie)
    }

    const handleDelete = (id) => {
        deleteSerie(id)
    }

    return (
        <tr>
            <td>{title}</td>
            <td>{producer}</td>
            <td>
                <button className='btn-edit' onClick={() => handleEdit(serie)}>Edit</button>
                <button className='btn-delete' onClick={() => handleDelete(id)}>Delete</button>
            </td>
        </tr>
    );
};

export default TableSerieRow;

TableSerieRow.propTypes = {
    serie: PropTypes.object,
    setSerieToEdit: PropTypes.func,
    deleteSerie: PropTypes.func
}
