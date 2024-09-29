"use client"
import React, { createContext, useState, useEffect } from 'react'

interface Iauth {
    children: React.ReactNode;
}

interface AuthContextType {
    isAuth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType | object>({})

function AuthLayout({ children }: Iauth) {

    const [isAuth, setAuth] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuth(true)
        } else {
            setAuth(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ isAuth, setAuth }} >
            {children}
        </AuthContext.Provider>
    )
}



export default AuthLayout