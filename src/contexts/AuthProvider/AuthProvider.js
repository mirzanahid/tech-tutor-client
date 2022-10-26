import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)
// google provider
const provider = new GoogleAuthProvider();
//github provider
const githubProvider = new GithubAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'nahid' });



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unSubscribe();
    }, []);

    // sign up with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // login with email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //log in with google 
    const handlerForGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    //log in with git hub
    const handlerForGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
            });
    }



    // logout
    const logout = () => {
        return signOut(auth)
    }


    const authInfo = { user, createUser, login, logout, handlerForGoogleLogin, handlerForGithubLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;