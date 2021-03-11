import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react'

interface UsernameProps {
  children: ReactNode
    username: string
    password: string
}

interface createcontextProps {
  usernamevalue: string
  passwordvalue: string

}

export const usernameContext = createContext({} as createcontextProps )

export function UserNameProvider({children,username,password }:UsernameProps) {
  const [usernamevalue, setUsername] = useState<string>(username)
  const [passwordvalue, setPassword] = useState<string>(password)


  return (
     <usernameContext.Provider value =
    {
      {
        usernamevalue,
        passwordvalue
      }
    }
  >

    {children}
  </usernameContext.Provider>
 
  )
}