import { useState } from "react"
import SeriesForm from "./SeriesForm"
import SeriesTable from "./SeriesTable"

const series = [
    {
        id: 1,
        title: "Breaking Bad",
        producer: "Vince Gilligan",
    },
    {
        id: 2,
        title: "Game of Thrones",
        producer: "David Benioff",
    },
    {
        id: 3,
        title: "The Soprano",
        producer: "David Chase"
    },
    {
        id: 4,
        title: "The Wire",
        producer: "David Simon"
    }
]

const CrudSeries = () => {

    const [ dbSeries, setDbSeries ] = useState(series)
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

export default CrudSeries
