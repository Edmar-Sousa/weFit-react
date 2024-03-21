import { ButtonRootContainer, ButtonRootProps } from './styles'

function ButtonRoot({ children, $green, ...rest }: ButtonRootProps) {
    return (
        <ButtonRootContainer {...rest} $green={$green}>
            {children}
        </ButtonRootContainer>
    )
}

export default ButtonRoot
