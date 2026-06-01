import Title from '../../components/Title'
import {
    ProjectContactList,
    ProjectBMICalculator,
    CalculadoraAutomatica,
    AHFShoes
} from '../../components/Project'
import { List } from './styles'

const Projects = () => (
    <section>
        <Title fontSize={16}>Projects</Title>
        <List>
            <li>
                <ProjectContactList />
            </li>
            <li>
                <ProjectBMICalculator />
            </li>
            <li>
                <CalculadoraAutomatica />
            </li>
            <li>
                <AHFShoes />
            </li>
        </List>
    </section>
)

export default Projects
