import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface ButtonRootProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    maxwidth?: number
    $transform?: 'uppercase' | 'lowercase' | 'capitalize'
    $green?: boolean
}

export const ButtonRootContainer = styled.button<ButtonRootProps>`
    width: 100%;

    max-width: ${({ maxwidth }) => (maxwidth ? `${maxwidth}px` : '100%')};

    border: none;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;

    margin-top: 8px;

    padding: 11px 8px;
    background: var(
        ${({ $green }) =>
            $green ? `--button-secondary-color` : `--button-primary-color`}
    );

    color: var(--text-white-color);

    text-transform: ${({ $transform }) => $transform ?? 'capitalize'};

    cursor: pointer;

    font-family: OpenSans, sans-serif;
    font-weight: bold;

    transition: background 400ms;

    &:hover {
        background: var(
            ${({ $green }) =>
                $green ? `--button-secondary-color` : `--button-primary-hover`}
        );
    }
`

export const ButtonGroup = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
`
