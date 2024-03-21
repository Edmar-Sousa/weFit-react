import styled from 'styled-components'

export const LoaddingContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

interface ImgProps {
    $loaded: boolean
}

export const Img = styled.img<ImgProps>`
    display: ${({ $loaded }) => ($loaded ? 'none' : 'block')};
    margin: auto;
`
