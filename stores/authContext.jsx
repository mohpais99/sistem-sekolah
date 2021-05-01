import { createContext } from 'react';

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    auth: false
})

export const AuthContextProvider = ({children}) => {
    return (
        <AuthContext.Provider value="hello">
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;