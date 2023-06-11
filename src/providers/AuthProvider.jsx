import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';
// import axios from 'axios';
export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


const signUp = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const loginWithEmailPass = (email,password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)

}
const updateUserProfile=(name, photo)=>{
   return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    
}

const loginWithGoogle = () =>{
    setLoading(true)

   return signInWithPopup(auth,googleProvider)
}

const logOut = ()=>{
    setLoading(true)

    return signOut(auth)
}



useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('Current Logged in user', currentUser);

            // Get and Set Token
            if (currentUser) {
                axios.post('http://localhost:3000/jwt',{email:currentUser.email})
                .then(data=>{
                    // console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)
            setLoading(false)

                })
            } else {
                localStorage.removeItem('access-token')
            }

            // setLoading(false)
        
    })
    return ()=>{
       return unsubscribe()
    }
},[])

const authInfo ={
loading, user, signUp, loginWithEmailPass,updateUserProfile,loginWithGoogle, logOut
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;