import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from './firebaseApp'

export async function getDocument(
  collectionName:string,
  setDocument:any,
  column?:string,
  value?:string
) {
  let q = query(collection(db, collectionName))
  if (column && value) q = query(q, where(column, '==', value))
  const unsub = onSnapshot(q, (querySnapshot) => {
    const documents:any = []
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    setDocument(documents)
  })
  //return unsubscribe
}