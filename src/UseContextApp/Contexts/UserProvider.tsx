import { UserContext } from "./UserContext"

const user = {
      name: 'juan',
      email: 'juan@perez.com',
      password: 'hq9wehcpq98'
}

export const UserProvider = ({ children }: any) => {
  return (
    <UserContext.Provider value={ user }>
      { children }
    </UserContext.Provider>
  )
}
