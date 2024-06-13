'use client'

import { useContext, createContext, useState, useEffect } from 'react'
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth'
import { auth } from './firebase/firebaseApp'
import { checkExisting } from './firebase/manageUser'
import { Toast } from 'antd-mobile'
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [gUser, setGUser] = useState(null)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        // IdP data available using getAdditionalUserInfo(result)
        checkExisting({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          active: true,
        })
        Toast.show({ position: 'top', content: 'Welcome =)' })
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
        console.log(error)
        Toast.show({ position: 'top', content: 'Error signin in.' })
      })
  }

  const googleSignOut = () => {
    signOut(auth).then(() => {
      Toast.show({ position: 'top', content: 'Take care =)' })
    }).catch((error) => {
      console.log(error)
      Toast.show({ position: 'top', content: 'Error signin out.'})
    })
  }

  useEffect(() => {
    //const unsubscribe = 
    onAuthStateChanged(auth, (currentUser) => {
      setGUser(currentUser)
    })
    //return () => unsubscribe()
  }, [gUser])

  return (
    <ConfigProvider locale={enUS}>
      <AuthContext.Provider value={{ gUser, googleSignIn, googleSignOut }}>
        {children}
      </AuthContext.Provider>
    </ConfigProvider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}