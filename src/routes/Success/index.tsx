import ButtonComponent from '@/components/Button'
import SuccessIcon from '@/icons/success.svg'

import { ImageSuccess, PageContainer, SuccessTitle } from './styled'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate = useNavigate()

    const handleGoBack = useCallback(() => {
        navigate('/')
    }, [])

    return (
        <PageContainer>
            <SuccessTitle>Compra realizada com sucesso!</SuccessTitle>

            <ImageSuccess
                src={SuccessIcon}
                alt="Imagem de um homen simbolizando que a compra foi finalizada"
            />

            <ButtonComponent.Root maxwidth={173} onClick={handleGoBack}>
                voltar
            </ButtonComponent.Root>
        </PageContainer>
    )
}

export default Success
