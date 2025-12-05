import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/SideBar'
import About from './containers/About'
import Projects from './containers/Projects'

function App() {
    return (
        <>
            <EstiloGlobal />
            <Container>
                <Sidebar />
                <main>
                    <About />
                    <Projects />
                </main>
            </Container>
        </>
    )
}

export default App
