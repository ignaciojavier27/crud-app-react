import { useState } from "react"
import SeriesForm from "./SeriesForm"
import SeriesTable from "./SeriesTable"

const CrudApi = () => {

    const [ dbSeries, setDbSeries ] = useState([])
    const [ serieToEdit, setSerieToEdit ] = useState(null)

    const createSerie = ( serie ) => {
        serie.id = dbSeries.length + 1
        setDbSeries([...dbSeries, serie])
    }

    const updateSerie = ( serie ) => {
        setDbSeries(
            dbSeries.map(el => el.id === serie.id
                                ? el = serie
                                : el
            )
        )
    }

    const deleteSerie = (id) => {
        setDbSeries(dbSeries.filter(serie => serie.id !== id))
    }

    return (
    <div>
        <SeriesForm 
            createSerie = {createSerie}
            updateSerie = {updateSerie}
            serieToEdit = {serieToEdit}
            setSerieToEdit = {setSerieToEdit}
        />
        <SeriesTable 
            series = {dbSeries}
            setSerieToEdit = {setSerieToEdit}
            deleteSerie = {deleteSerie}
        />
    </div>
    )
}

export default CrudApi
