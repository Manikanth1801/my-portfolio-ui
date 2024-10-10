import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react'

type User = {
    name: string;
    email: string;
    age: number;
    phone: string;
}
interface GlobalContextType  {
    count: number;
    setCount: Dispatch<SetStateAction<number>>
    user: User[]|[];
    setUser: Dispatch<SetStateAction<User[]>>
    message: string;
    setMessage: Dispatch<SetStateAction<string>>
}


const iniialValues:GlobalContextType = {
    count: 0,
    setCount: () => {},
    user: [],
    setUser: () => {},
    message: '',
    setMessage: () => {}
}
interface GlobalProviderInterface{
    children: ReactNode
}

export const GlobalContext = createContext(iniialValues)

const GlobalProvider:FC<GlobalProviderInterface>= ({children}) => {
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<User[]|[]>([]);
    const [message, setMessage] = useState<string>('')
  return (
    <GlobalContext.Provider
    value = {{
        count,
        setCount,
        user,
        setUser,
        message,
        setMessage
    }}
    >
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider