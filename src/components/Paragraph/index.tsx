import { Paragraph as StyledParagraph } from './styles' // faz a importação do estilo do componente

export type Props = {
    children: string // o React só aceita o valor dessa propriedade no meio da tag se o nome for esse
    atributeType?: 'principal' | 'secundario' // a propriedade é opcional por conta do "?" e pode receber apenas esses dois valores
    fontSize?: number
}

const Paragraph = ({
    children,
    atributeType = 'principal',
    fontSize
}: Props) => (
    <StyledParagraph atributeType={atributeType} fontSize={fontSize}>
        {children}
    </StyledParagraph>
)

export default Paragraph
