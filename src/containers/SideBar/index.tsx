import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'

import { Description, ThemeButton, SideBarContainer } from './styles'

type ThemeButtonProps = {
    toggleTheme: () => void
}

const Sidebar = (props: ThemeButtonProps) => (
    <aside>
        <SideBarContainer>
            <Avatar />
            <Title fontSize={20}>Arthur Fagundes</Title>
            <Paragraph atributeType="secundario" fontSize={16}>
                ArthurFaggundes
            </Paragraph>
            <Description atributeType="principal" fontSize={12}>
                Software Engineer
            </Description>
            <ThemeButton onClick={props.toggleTheme}>
                Change Dark/Light Theme
            </ThemeButton>
        </SideBarContainer>
    </aside>
)

export default Sidebar
