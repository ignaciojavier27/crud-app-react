import { useState } from 'react'
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"

const series = [
    {
        id: 1,
        name: 'The Soprano',
        producer: 'David Chase'
    },
    {
        id: 2,
        name: 'Breaking Bad',
        producer: 'Vince Gilligan'
    },
    {
        id: 3,
        name: 'The Wire',
        producer: 'Sean Penn'
    },
    {
        id: 4,
        name: 'The Office',
        producer: 'Greg Daniels'
    },
    {
        id: 5,
        name: 'Game of Thrones',
        producer: 'George R. R. Martin'
    }
]

const CrudApp = () => {

    const [data, setData] = useState(series)

    return (
    <div>
        <h2>CRUD APP</h2>
        <CrudForm />
        <CrudTable data={data}/>
    </div>
    )
}

export default CrudApp
