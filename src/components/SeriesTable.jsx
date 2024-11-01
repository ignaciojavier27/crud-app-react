import PropTypes from 'prop-types'
import TableSerieRow from './TableSerieRow'

const SeriesTable = ({series, setSerieToEdit, deleteSerie}) => {
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Producer</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    series.map(serie => <TableSerieRow 
                                        key={serie.id} 
                                        serie={serie} 
                                        setSerieToEdit={setSerieToEdit} 
                                        deleteSerie={deleteSerie}/>)
                }
            </tbody>
        </table>
    </div>
    )
}

export default SeriesTable

SeriesTable.propTypes = {
    series: PropTypes.array,
    setSerieToEdit: PropTypes.func,
    deleteSerie: PropTypes.func
}
