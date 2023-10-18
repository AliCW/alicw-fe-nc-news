import { createContext, useState } from 'react'

export const SignInContext = createContext({
    openSignIn: false,
    setOpenSignIn: () => {},
});

const SignInDropDown = ({children}) => {
    
    const [openSignIn, setOpenSignIn]  = useState(false)

    return (
        <SignInContext.Provider
            value={{
                openSignIn,
                setOpenSignIn,
            }}
            >
            {children}
        </SignInContext.Provider>
    )
};

export default SignInDropDown;