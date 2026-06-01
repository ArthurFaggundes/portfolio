import Title from '../Title'
import Paragraph from '../Paragraph'
import { Card, ButtonLink, Image } from './styles'

const ProjectContactList = () => (
    <Card>
        <Title>Contact List </Title>
        <Image
            src="https://img.sanishtech.com/u/7ca6c1992251097f6205d284513c8c4b.jpg"
            alt="Screen showing editing a contact from the list"
        />
        <Paragraph atributeType="secundario">
            Development of a web application for contact management, allowing
            users to add, view, edit, and delete information in a practical and
            organized manner directly on the contact cards.
        </Paragraph>
        <ButtonLink
            target="_blank"
            href="https://contact-list-react-kappa.vercel.app/"
        >
            Visualize
        </ButtonLink>
    </Card>
)

const ProjectBMICalculator = () => (
    <Card>
        <Title>BMI Calculator</Title>
        <Image
            src="https://img.sanishtech.com/u/bf11cca19a7cb9373141cb10b6056408.png"
            alt="Screen showing a response to a normal BMI"
        />
        <Paragraph atributeType="secundario">
            A Body Mass Index (BMI) calculator built with ReactJS that allows
            users to input their height and weight to calculate their BMI with a
            user-friendly interface.
        </Paragraph>
        <ButtonLink
            target="_blank"
            href="https://exercicio-react-bmi.vercel.app/"
        >
            Visualize
        </ButtonLink>
    </Card>
)

const CalculadoraAutomatica = () => (
    <Card>
        <Title>Calculadora Automatica (pt-br)</Title>
        <Image
            src="https://img.sanishtech.com/u/2431ff8efbdc2224bac6aae791f21779.png"
            alt="Screen a division operation automatically"
        />
        <Paragraph atributeType="secundario">
            An interactive web application that automatically performs
            calculations based on the entry of two values and the selection of
            one of four mathematical operations, with real-time updates, without
            the need to click a button.
        </Paragraph>
        <ButtonLink
            target="_blank"
            href="https://exercicio-vue-js-ruddy.vercel.app/"
        >
            Visualize
        </ButtonLink>
    </Card>
)

const AHFShoes = () => (
    <Card>
        <Title> AHFShoes E-Commerce (pt-br)</Title>
        <Image
            src="https://img.sanishtech.com/u/071a0c259b868c0fc67260d4933f7919.jpg"
            alt="Screen a division operation automatically"
        />
        <Paragraph atributeType="secundario">
            Development of a responsive institutional website, designed to meet
            the requirements of the business, with an additional focus on visual
            presentation, usability, and responsiveness across different
            devices.
        </Paragraph>
        <ButtonLink target="_blank" href="https://ahf-shoes-2-0.vercel.app/">
            Visualize
        </ButtonLink>
    </Card>
)

export {
    ProjectContactList,
    ProjectBMICalculator,
    CalculadoraAutomatica,
    AHFShoes
}
