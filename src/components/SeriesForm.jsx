import { useEffect, useState } from "react"
import PropTypes from 'prop-types'

const initialForm = {
    id: null,
    title: '',
    producer: '',
}

const SeriesForm = ({ createSerie, updateSerie, serieToEdit, setSerieToEdit}) => {

    const [ form, setForm ] = useState(initialForm)

    useEffect( () => {
        if(serieToEdit){
            setForm(serieToEdit);
        }else{
            setForm(initialForm);
        }
    }, [serieToEdit]) 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.title || !form.producer) {
            alert("Please fill in all fields")
            return
        }

        if(form.id === null){
            createSerie(form);
            handleReset();
        }else{
            updateSerie(form);
            handleReset();
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleReset = () => {
        setForm(initialForm);
        setSerieToEdit(null);
    }
 
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" onChange={handleChange} value={form.title}/>

            <label htmlFor="producer">Producer: </label>
            <input type="text" name="producer" id="producer" onChange={handleChange} value={form.producer}/>

            {
                (serieToEdit)
                    ? <button type="submit" className="btn-edit">Edit</button>
                    : <button type="submit" className="btn-add">Add</button>
            }
            <button type="reset" className="btn-reset" onClick={handleReset}>Reset</button>
        </form>
    </div>
    )
}

export default SeriesForm

SeriesForm.propTypes = {
    createSerie: PropTypes.func,
    updateSerie: PropTypes.func,
    serieToEdit: PropTypes.object,
    setSerieToEdit: PropTypes.func
}
