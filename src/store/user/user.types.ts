export interface IUser {
    id: number
    name: string
    email: string
    attendingMeetupsIds: number[]
    hostingMeetupsIds: number[]
  }
  
  export interface IUserPassword extends IUser {
    password: string
  }
  