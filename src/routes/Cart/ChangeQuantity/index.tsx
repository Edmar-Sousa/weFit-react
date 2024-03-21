import { ChangeEvent, useCallback } from 'react'
import { InputContainer, NumberInput, ButtonIcon } from './styles'

import PlusIcon from '@/icons/plus.svg'
import MinusIcon from '@/icons/minus.svg'

interface ChangeQuantityProps {
    quantity: number
    onChange: (value: number) => void
}

function ChangeQuantity({ onChange, quantity }: ChangeQuantityProps) {
    const handlerChange = useCallback(
        ($event: ChangeEvent<HTMLInputElement>) => {
            const input = $event.target as HTMLInputElement

            onChange(Number(input.value))
        },
        [quantity, onChange]
    )

    const handlerAction = useCallback(
        (add: number) => {
            const updateValue = quantity + add
            onChange(updateValue)
        },
        [quantity, onChange]
    )

    return (
        <InputContainer>
            <ButtonIcon
                type="button"
                onClick={() => handlerAction(-1)}
                aria-label="Botão para remover uma unidade do carrinho"
            >
                <img src={MinusIcon} alt="Icone do sinal de menos" />
            </ButtonIcon>

            <NumberInput
                type="number"
                name="quantity"
                min={1}
                value={quantity}
                onChange={handlerChange}
            />

            <ButtonIcon
                type="button"
                onClick={() => handlerAction(1)}
                aria-label="Botão para adicionar uma unidade ao carrinho"
            >
                <img src={PlusIcon} alt="Icone do sinal de adicionar" />
            </ButtonIcon>
        </InputContainer>
    )
}

export default ChangeQuantity
