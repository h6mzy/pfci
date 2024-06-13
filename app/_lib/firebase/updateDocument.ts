import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebaseApp'

export async function updateDocument(collName: string, docId: string, changes: any) {
  const docRef = doc(db, collName, docId)
  await updateDoc(docRef, changes)
  return
}