import { ImageContainer, ImageEmpty } from './styles'

interface EmptyMessageImageProps {
    emptyIcon: string
}

function EmptyMessageImage({ emptyIcon }: EmptyMessageImageProps) {
    return (
        <ImageContainer>
            <ImageEmpty
                src={emptyIcon}
                alt="Imagem de uma mulher com uma placa com das setas"
            />
        </ImageContainer>
    )
}

export default EmptyMessageImage
