import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderPage = styled.header`
    padding: 31.5px 16px;

    max-width: 1080px;
    margin: auto;
`

export const NavigationContainer = styled.nav`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LinkStyled = styled(Link)`
    font-family: OpenSans, sans-serif;
    font-weight: bold;
    font-size: 2rem;

    text-decoration: none;

    color: var(--text-white-color);
`

export const CartContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    text-decoration: none;

    gap: 16px;
`

export const CartTitle = styled.p`
    display: none;

    font-family: OpenSans, sans-serif;
    font-size: 1.4rem;
    font-weight: 600;

    text-decoration: none;

    color: var(--text-white-color);

    @media (min-width: 425px) {
        display: block;
    }
`

export const CartItems = styled.p`
    font-family: OpenSans, sans-serif;
    font-size: 1.2rem;
    font-weight: 600;

    color: var(--text-gray-color);

    @media (min-width: 425px) {
        text-align: right;
    }
`
