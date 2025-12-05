import Title from '../Title'
import Paragraph from '../Paragraph'
import { Card, ButtonLink } from './styles'

const Project = () => (
    <Card>
        <Title>To Do List</Title>
        <Paragraph atributeType="secundario">
            A task management application built with VueJS that allows users to
            create, update, and delete tasks. Features include task filtering.
        </Paragraph>
        <ButtonLink>Visualizar</ButtonLink>
    </Card>
)

export default Project
