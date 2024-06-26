import styled from 'styled-components'

export const MoviesListContainer = styled.ul`
    list-style: none;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 16px;

    padding-bottom: 20px;
`

export const MovieListItem = styled.li`
    width: 100%;
    height: 100%;

    min-height: 330px;
    max-width: 340px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: auto;

    border-radius: 4px;
    padding: 16px;

    background: var(--secondary-background-color);
`

export const MovieTitle = styled.p`
    font-family: OpenSans, sans-serif;
    font-weight: bold;
    font-size: 1.2rem;

    margin: 8px 0;
    text-align: center;

    color: var(--text-color);
`

export const MoviePrice = styled.p`
    font-family: OpenSans, sans-serif;
    font-size: 1.6rem;
    font-weight: bold;

    text-align: center;

    color: var(--accent-color);
`
