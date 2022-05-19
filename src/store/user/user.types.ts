export interface IUser {
    id: number
    name: string
    email: string
    attendingMeetupsIds: number[]
    hostingMeetupsIds: number[]
    password?: string
}
  