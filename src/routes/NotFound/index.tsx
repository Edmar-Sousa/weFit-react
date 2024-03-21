import ButtonComponent from '@/components/Button'
import Icon404 from '@/icons/404.svg'

import { Image, PageContainer, Title } from './styled'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()

    const handleGoBack = useCallback(() => {
        navigate('/')
    }, [])

    return (
        <PageContainer>
            <Title>Não tem nada aqui! :)</Title>

            <Image src={Icon404} alt="Imagem de um homen " />

            <ButtonComponent.Root
                type="button"
                maxwidth={173}
                onClick={handleGoBack}
                aria-label="Botão para voltar para a pagina de catalogo"
            >
                voltar
            </ButtonComponent.Root>
        </PageContainer>
    )
}

export default NotFound
