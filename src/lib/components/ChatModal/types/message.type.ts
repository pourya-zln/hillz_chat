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
  id: number
  message: string
  createdAt: string
  updatedAt: string
  roomId: number
  from: number
}
