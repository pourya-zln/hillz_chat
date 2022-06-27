export interface IsSelfProps {
  isSelf?: boolean
}

export interface CHHeaderPops {
  backgroundURL: string
}

export interface AvatarProps {
  size: number
}

export interface IMessage {
  id: number | string
  message: string
  createdAt: string
  updatedAt: string
  roomId: number
  from: number
  fromType: "USER" | "SYSTEM"
  messageType: string
  src: string | null
}
