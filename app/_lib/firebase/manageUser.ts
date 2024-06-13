import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebaseApp'
import { Toast } from 'antd-mobile'
import { updateDocument } from './updateDocument'

// add user to 'users' collection
export async function createUser(user:any) {
  const docRef = await addDoc(collection(db, 'users'), user)
  Toast.show({
    position: 'top',
    content: 'Account created.',
  })
}

// check if email exists in 'users' collection
export async function checkExisting(user: any) {
  const usersRef = collection(db, 'users')
  const q = query(usersRef, where('email', '==', user.email))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.docs.length > 0) {
    updateDocument('users', querySnapshot.docs[0].id, { active: true })
  } else {
    createUser(user)
  }
}