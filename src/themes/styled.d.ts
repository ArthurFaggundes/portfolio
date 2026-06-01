import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        firstColor: string
        secondColor: string
        backgroundColor: string
        button_BackgroundColor: string
        button_BackgroundColorHover: string
        projects_BorderColor: string
    }
}
