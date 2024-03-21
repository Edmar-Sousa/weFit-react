import { ReactNode } from 'react'
import { ButtonGroup } from './styles'

interface ButtonLeftGroupProps {
    children: ReactNode
}

function ButtonLeftGroup({ children }: ButtonLeftGroupProps) {
    return <ButtonGroup>{children}</ButtonGroup>
}

export default ButtonLeftGroup
