import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
    width: 100%;

    padding: 16px;
    border-radius: 4px;

    background: var(--secondary-background-color);
`

const flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TotalSection = styled(flex)`
    width: 100%;

    margin-top: 21px;
    margin-bottom: 16px;

    @media (min-width: 518px) {
        max-width: 197px;
    }
`

export const TotalContainer = styled(flex)`
    width: 100%;

    flex-direction: column;

    @media (min-width: 518px) {
        flex-direction: row-reverse;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;

    @media (min-width: 518px) {
        max-width: 173px;
    }
`

export const Line = styled.span`
    display: block;

    width: 100%;
    height: 1px;

    background: var(--text-gray-color);
`

interface MovieTiTleProps {
    $size?: number
}

const TitlePrimaryStyle = styled.p<MovieTiTleProps>`
    font-family: OpenSans, sans-serif;
    font-weight: bold;

    font-size: ${({ $size }) => ($size ? `${$size}rem` : '1.6rem')};
`

export const Title = styled(TitlePrimaryStyle)`
    text-transform: uppercase;

    color: var(--text-gray-color);
`

interface PriceProps {
    $width?: string
}

export const Price = styled(TitlePrimaryStyle)<PriceProps>`
    width: ${({ $width }) => $width ?? 'min-content'};

    color: var(--accent-color);
`

export const MovieTitle = styled(TitlePrimaryStyle)`
    color: var(--accent-color);
`

export const MovieImage = styled.img`
    width: 64px;
`

export const MovieContainer = styled.div`
    width: 100%;
    height: 83px;

    display: flex;
    gap: 16px;

    margin-bottom: 21px;
`

export const MovieHeader = styled(flex)`
    width: 100%;

    display: flex;
    align-items: start;
`

export const ProductsHeader = styled(flex)`
    width: 100%;
    margin-bottom: 24px;

    display: none;

    @media (min-width: 576px) {
        display: flex;
    }
`

export const ButtonIcon = styled.button`
    background: none;
    border: none;
`

export const Group = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    @media (min-width: 576px) {
        display: none;
    }
`

export const MoviePrice = styled(flex)`
    width: min-content;
    gap: 16px;

    @media (min-width: 573px) {
        display: none;
    }
`

interface ShowWhenProps {
    $width?: string
}

export const ShowWhen = styled(flex)<ShowWhenProps>`
    display: none;
    width: ${({ $width }) => $width ?? '100%'};

    @media (min-width: 573px) {
        display: flex;
    }
`

export const DesktopTitle = styled.div`
    width: 40%;
    max-width: 270px;
`

export const MovieInformation = styled(flex)`
    width: 100%;
    flex-direction: column;

    @media (min-width: 573px) {
        flex-direction: row;
    }
`
