import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged,
    signOut
} from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoad(false)
        })
        return () => unSubscribe();
    }, []);

    // sign up with email and password
    const createUser = (email, password) => {
        setLoad(false)
        return createUserWithEmailAndPassword(auth, email, password);
        

    }
    // login with email and password
    const login = (email, password) => {
        setLoad(false)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // logout
    const logout = () => {
        setLoad(false)
        return signOut(auth)
    }


    const authInfo = { user, createUser, login, logout,load }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;