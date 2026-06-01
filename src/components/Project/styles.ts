import styled from 'styled-components'

export const Card = styled.div`
    border: 1px solid ${(props) => props.theme.projects_BorderColor};
    padding: 16px;
`

export const ButtonLink = styled.a`
    color: ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.button_BackgroundColor};
    font-size: 14px;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
`
export const Image = styled.img`
    max-width: 100%;
`
