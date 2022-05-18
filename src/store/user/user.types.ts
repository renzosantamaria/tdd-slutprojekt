export interface IUser {
    id: number
    name: string
    email: string
    attendingMeetupsIds: string[]
    hostingMeetupsIds: string[]
  }
  
  export interface IUserPassword extends IUser {
    password: string
  }
  