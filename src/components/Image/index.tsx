import { useCallback, useState } from 'react'

import Loading from '../Loading'

import { LoaddingContainer, Img } from './styles'

interface LoaddingImageProps {
    src: string
    alt: string

    width: string
}

function Image({ src, alt, width }: LoaddingImageProps) {
    const [isLoadding, setIsLoadding] = useState(true)

    const handleOnLoadImage = useCallback(() => {
        setIsLoadding(() => false)
    }, [])

    return (
        <LoaddingContainer $width={width}>
            {isLoadding && <Loading />}

            <Img
                src={src}
                alt={alt}
                width={width}
                $loaded={isLoadding}
                onLoad={handleOnLoadImage}
            />
        </LoaddingContainer>
    )
}

export default Image
