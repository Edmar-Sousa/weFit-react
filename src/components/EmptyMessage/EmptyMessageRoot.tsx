import { ReactNode } from 'react'
import { MessageContainer } from './styles'

interface EmptyMessageRootProp {
    children: ReactNode
}

function EmptyMessageRoot({ children }: EmptyMessageRootProp) {
    return <MessageContainer>{children}</MessageContainer>
}

export default EmptyMessageRoot
