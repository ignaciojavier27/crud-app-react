import { useEffect, useState } from "react"
import SeriesForm from "./SeriesForm"
import SeriesTable from "./SeriesTable"
import { helpHttp } from "../helpers/helpHttp.js"
import Loader from "./Loader.jsx"
import Message from "./Message.jsx"

const CrudApi = () => {

    const [ dbSeries, setDbSeries ] = useState(null);
    const [ serieToEdit, setSerieToEdit ] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/series";

    useEffect( () => {
        setLoading(true);
        api.get(url)
            .then((res) => {
                if(!res.err){
                    setDbSeries(res);
                    setError(null);
                }else{
                    setDbSeries(null);
                    setError(res);
                }
                setLoading(false);
            })
    },[url])

    const createSerie = ( serie ) => {
        serie.id = dbSeries.length + 1
        serie.id = serie.id.toString();

        let options = { 
            body: serie, 
            headers: { "Content-Type": "application/json" }
        }

        api.post( url, options )
                .then((res) => {
                    if(!res.err){
                        setDbSeries([...dbSeries, res]);
                    }else{
                        setError(res);
                    }
                })
    }

    const updateSerie = ( serie ) => {
        let endpoint = `${url}/${serie.id}`;

        let options = { 
            body: serie, 
            headers: { "Content-Type": "application/json" }
        }

        api.put( endpoint, options )
                .then((res) => {
                    if(!res.err){
                        setDbSeries( dbSeries.map( el => el.id === serie.id ?el = serie :el ));
                    }else{
                        setError(res);
                    }
                })
    }

    const deleteSerie = (id) => {

        let endpoint = `${url}/${id}`;

        let options = { 
            body: id, 
            headers: { "Content-Type": "application/json" }
        }

        api.del( endpoint, options )
                .then((res) => {
                    if(!res.err){
                        setDbSeries( dbSeries.filter( el => el.id !== id ));
                    }else{
                        setError(res);
                    }
                })
    }

    return (
    <div>
        <SeriesForm 
            createSerie = {createSerie}
            updateSerie = {updateSerie}
            serieToEdit = {serieToEdit}
            setSerieToEdit = {setSerieToEdit}
        />
        {loading && <Loader />}
        {error && <Message err={`Error ${error.status}: ${error.statusText}`} />}
        {
            dbSeries && <SeriesTable 
                series = {dbSeries}
                setSerieToEdit = {setSerieToEdit}
                deleteSerie = {deleteSerie}
            />
        }
    </div>
    )
}

export default CrudApi
