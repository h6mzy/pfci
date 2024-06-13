import { deleteObject, getStorage, ref } from 'firebase/storage'

/**
  * delete file from firebase storage
  *
  * @param {string} fullPath directory and file name with extension (/images/photoname.jpg)
  * @param {Function} onSuccess function to call if deletion completed
  * @param {Function} onFail function to call if deletion failed
*/

export function deleteFile(fullPath:string, onSuccess?:Function, onFail?:Function) {
  const storage = getStorage()
  const desertRef = ref(storage, fullPath)
  deleteObject(desertRef).then(() => {
    if (onSuccess) onSuccess()
  }).catch((error) => {
    console.log(error)
    if (onFail) onFail
  })
}