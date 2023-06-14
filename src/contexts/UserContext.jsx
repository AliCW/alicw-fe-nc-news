import { createContext, useState } from 'react'


export const UserContext = createContext({
    username: '',
    setUsername: () => {},
})

const ProvideUsernameContext = ({children}) => {
    const [username, setUsername] = useState('')
    return (
        <UserContext.Provider 
        value={{
            username, 
            setUsername,
        }}
        >
        {children}
        </UserContext.Provider>
    )
}

export default ProvideUsernameContext;