import { Title as StyledTitle } from './styles' // faz a importação do estilo do componente

export type Props = {
    children: string // o React só aceita o valor dessa propriedade no meio da tag se o nome for esse
    fontSize?: number
}

const Title = (props: Props) => (
    <StyledTitle fontSize={props.fontSize}>{props.children}</StyledTitle>
)

export default Title
