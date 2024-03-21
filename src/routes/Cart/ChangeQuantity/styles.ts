import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 11px;
`

export const NumberInput = styled.input`
    width: 59px;
    height: 26px;

    font-family: OpensSans, sans-serif;
    font-size: 1.4rem;
    font-weight: normal;

    text-align: center;
    color: var(--accent-color);

    border: 1px solid var(--border-gray-color);
    border-radius: 4px;

    background: var(--secondary-background-color);

    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const ButtonIcon = styled.button`
    background: none;
    border: none;

    cursor: pointer;
`
