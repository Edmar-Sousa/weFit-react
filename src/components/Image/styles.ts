import styled from 'styled-components'

interface LoaddingContainerProps {
    $width: string
}

export const LoaddingContainer = styled.div<LoaddingContainerProps>`
    width: ${({ $width }) => $width};
    margin: auto;

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
