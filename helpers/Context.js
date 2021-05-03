import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

//api here is an axios instance which has the baseURL set according to the env.
import api from '../services/Api';
import LoadingScreen from '../components/LoadingScreen';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const cookies = Cookies.get('token')
            if (cookies) {
                let {token} = JSON.parse(cookies)
                console.log("Got a token in the cookies, let's see if it is valid")
                api.defaults.headers.Authorization = `Bearer ${token}`
                const { data: user } = await api.get('auth/get')
                if (user) setUser(user.user);
                router.push('/panel/dashboard')
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (username, password) => {
        const { data: token } = await api.post('auth/signin', { username, password })
        if (token) {
            console.log("Got token")
            Cookies.set('token', token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user } = await api.get('auth/get')
            setUser(user.user)
            router.push('/panel/dashboard')
        }
    }
    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        router.push('/')
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout, router }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export default useAuth;

export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, isLoading, router } = useAuth();
    if (isLoading|| !isAuthenticated){
        return <LoadingScreen status={isAuthenticated} path={router.pathname} />;
    }
    return children;
};