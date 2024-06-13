import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from './firebaseApp'

/**
  * get documents data from firestore
  *
  * @param {string} collectionName name of collection in firestore
  * @param {Function} setDocuments saves documents data in state
  * @param {string} column column name to query
  * @param {string} value query string to match column value
*/

export async function getDocuments(
  collectionName:string,
  setDocuments:any,
  column?:string,
  value?:string,
) {
  let q = query(collection(db, collectionName))
  if (column && value) q = query(q, where(column, '==', value))
  //const unsubscribe = 
  onSnapshot(q, (querySnapshot) => {
    const documents:any = []
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    setDocuments(documents)
  })
  //return unsubscribe()
}