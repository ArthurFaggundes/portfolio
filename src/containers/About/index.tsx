import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection, ShiledSection } from './styles'

const About = () => (
    <section>
        <Title fontSize={16}>About me</Title>
        <Paragraph atributeType="principal">
            I have experience in business logic, demand management and notions
            of Customer Success. I also have knowledge in programming logic
            Python, JavaScript, and web development, as well as tools like
            Django, Vue.js, SASS, React among other technologies such as code
            versioning through Git and Github. I have a basic notion of neural
            networks, Artificial Intelligence and Cybersecurity.
        </Paragraph>
        <Title fontSize={16}>Main technologies</Title>
        <ShiledSection>
            <img src="https://img.shields.io/badge/Python-F37626?style=for-the-badge&logo=Python&logoColor=white" />
            <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
            <img src="https://img.shields.io/badge/css-663399?style=for-the-badge&logo=Css&logoColor=white" />
            <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
            <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=Html5&logoColor=white" />
        </ShiledSection>
        <GithubSection>
            <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=ArthurFaggundes&show_icons=true&theme=dracula" />
            <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=ArthurFaggundes&layout=compact&theme=dracula" />
        </GithubSection>
    </section>
)

export default About
