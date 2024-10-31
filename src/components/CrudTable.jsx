import propTypes from 'prop-types'
import CrudTableRow from './CrudTableRow';
const CrudTable = ({data}) => {
    return (
    <div>
        <h3>CrudTable</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Producer</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length === 0
                        ? <tr><td colSpan={3}>No hay datos</td></tr>
                        : data.map( el => <CrudTableRow el={el} key={el.id}/>)
                }
            </tbody>
        </table>
    </div>
    )
}

export default CrudTable;

CrudTable.propTypes = {
    data : propTypes.array
}
