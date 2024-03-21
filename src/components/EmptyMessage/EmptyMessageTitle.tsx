import { MessageTitle } from './styles'

interface EmptyMessageTitleProp {
    text: string
}

function EmptyMessageTitle({ text }: EmptyMessageTitleProp) {
    return <MessageTitle>{text}</MessageTitle>
}

export default EmptyMessageTitle
