import styled from 'styled-components'

export const PageContainer = styled.div`
    width: 100%;
    min-height: 596px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 24px;

    padding: 64px 45px;
    border-radius: 4px;

    background: var(--secondary-background-color);
`

export const SuccessTitle = styled.p`
    font-family: OpenSans, sans-serif;
    font-size: 2rem;
    font-weight: bold;

    margin: 8px 0;
    text-align: center;

    color: var(--text-color);
`

export const ImageSuccess = styled.img`
    width: 100%;
    max-width: 294px;
`
