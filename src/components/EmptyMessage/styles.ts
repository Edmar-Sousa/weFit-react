import styled from 'styled-components'

export const MessageContainer = styled.section`
    width: 100%;
    min-height: 596px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 24px;

    padding: 64px;

    border-radius: 4px;

    background: var(--secondary-background-color);
`

export const MessageTitle = styled.h2`
    font-size: 20px;
    font-family: OpenSans, sans-serif;
    font-weight: bold;

    text-align: center;
    color: var(--text-color);
`

export const Line = styled.div`
    width: 100%;
    max-width: 447px;

    height: 1.36px;

    background: #3f3d56;
`

export const ImageContainer = styled.div`
    width: 100%;
    max-width: 447px;
`

export const ImageEmpty = styled.img`
    margin: auto;
    display: block;
`
