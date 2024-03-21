import styled from 'styled-components'

export const LoaderImage = styled.img`
    width: 100%;
    max-width: 62px;

    display: block;
    margin: auto;

    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotateZ(360deg);
        }
    }
`
