import { Dialog } from 'antd-mobile'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { fromBlob } from 'image-resize-compress'

/**
  * Convert image into webp, compress and upload to firestore
  *
  * @param {File} file antd-mobile ImageUploadItem
  * @param {string} fileLoc directory and file name without extension (/images/photo)
  * @param {Function} onUploadSuccess function to call after successful upload
  * @param {Function} onCancel cancel upload
*/

export async function uploadImageFile(file:File, fileLoc:string, onUploadSuccess?:Function, onCancel?:Function) {
  Dialog.confirm({
    bodyClassName: 'text-center',
    content: 'This will replace your photo if you already have one.',
    onConfirm: async () => {
      const quality = 80
      const width = 500
      const height = 'auto'
      const format = 'webp'
      fromBlob(file, quality, width, height, format)
        .then((blob) => {
          const storage = getStorage()
          const storageRef = ref(storage, `${fileLoc}.${format}`)
          uploadBytes(storageRef, blob).then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then((url) => { if (onUploadSuccess) onUploadSuccess(url) })
              .catch((error) => {})
          })
        })
    },
    onCancel: () => { if (onCancel) onCancel() },
    confirmText: 'Upload',
    cancelText: 'Cancel',
    closeOnMaskClick: true,
  })
  return {
    url: URL.createObjectURL(file),
  }
}