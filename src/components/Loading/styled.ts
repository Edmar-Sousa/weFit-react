import styled from 'styled-components'

export const LoaderImage = styled.img`
    width: 62px;
    height: 62px;

    display: block;
    margin: auto;

    animation: spin 1s linear infinite;

    @media (min-width: 425px) {
        margin-top: 40px;
    }

    @keyframes spin {
        to {
            transform: rotateZ(360deg);
        }
    }
`
