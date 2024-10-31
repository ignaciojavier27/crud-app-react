import { useState } from 'react';


const initialForm = {
    name: "",
    producer: "",
    id: null
}

const CrudForm = () => {

    const [form, setForm] = useState(initialForm);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        console.log(e)
    }

    const handleReset = e => {
        console.log(e)
    }

    return (
    <div>
        <h3>Agregar</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Nombre" 
                onChange={handleChange} 
                value={form.name}
            />
            <input 
                type="text" 
                name="producer" 
                placeholder="Productor" 
                onChange={handleChange} 
                value={form.producer}
            />
            <input 
                type="submit" 
                value="Enviar" 
            />
            <input 
                type="reset" 
                value="Limpiar" 
                onClick={handleReset} 
            />
        </form>
    </div>
    )
}

export default CrudForm
