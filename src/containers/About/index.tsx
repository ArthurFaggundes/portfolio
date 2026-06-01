import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

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
        <GithubSection>
            <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=ArthurFaggundes&show_icons=true&theme=dracula" />
            <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=ArthurFaggundes&layout=compact&theme=dracula" />
        </GithubSection>
    </section>
)

export default About
