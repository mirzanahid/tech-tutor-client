import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged,
    signOut,
    updateProfile
} from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [load, setLoad] = useState(true)
    const [dark, setDark] = useState('')



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
    // update user profile 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }

    // logout
    const logout = () => {
        setLoad(false)
        return signOut(auth)
    }


    //dark mode
    const darkMode=(data)=>{
        if(data === true){
            setDark('dark')
        }
        else{
            setDark('light')
        }
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoad(false)
        })
        return () => unSubscribe();
    }, []);




    const authInfo = { user, createUser, login, logout, load, updateUserProfile, darkMode,dark }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;