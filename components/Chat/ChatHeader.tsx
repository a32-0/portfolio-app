import { CHAT_NAME_PARTS } from '@/data/chatbot/ui'
import IconButton from '@/components/ui/IconButton'
import { CloseIcon } from '@/components/ui/icons'

type Props = {
  onClose: () => void
}

export default function ChatHeader({ onClose }: Props) {
  return (
    <div className="bg-chat-surface text-chat-text flex h-12 shrink-0 items-center justify-between rounded-[30px] px-6 sm:h-20">
      <span className="text-base md:text-xl">
        <span className="font-medium">{CHAT_NAME_PARTS.primary}</span>
        <span className="font-light">{CHAT_NAME_PARTS.secondary}</span>
      </span>
      <IconButton onClick={onClose} label="Close chat" size="sm" className="sm:h-12 sm:w-12">
        <CloseIcon />
      </IconButton>
    </div>
  )
}
