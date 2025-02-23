import React, { createContext, useState } from 'react';
import app from '../firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
export const AuthContext= createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(false)
    const auth =getAuth(app)
    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
  
    const userInfo={user,setUser ,createUser,loading}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;