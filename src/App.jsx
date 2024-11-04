import CrudApi from "./components/CrudApi"
import CrudSeries from "./components/CrudSeries"

const App = () => {
    return (
    <main>
        <section>
            <h2 className="text-center">CRUD API</h2>
            <CrudApi />
        </section>
        <section>
            <h2 className="text-center">Series</h2>
            <CrudSeries />
        </section>
    </main>
    )
}

export default App
