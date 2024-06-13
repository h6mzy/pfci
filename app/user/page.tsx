'use client'

import { Button, Dialog, Divider, Form, Grid, Image, ImageUploader, Input, Space, Toast } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { UserAuth } from '../_lib/auth-context'
import { deleteUser, getAuth } from 'firebase/auth'
import { updateDocument } from '../_lib/firebase/updateDocument'
import Link from 'next/link'
import styles from '../components/form.module.sass'
import { getDocuments } from '../_lib/firebase/getDocuments'
import { User } from '../_lib/interface'
import { uploadImageFile } from '../components/upload'
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader'
import { DeleteOutline } from 'antd-mobile-icons'
import { deleteFile } from '../_lib/firebase/deleteFile'
import { GoogleIcon } from '../components/icons'

export default function UserPage() {
  const { gUser, googleSignIn, googleSignOut } = UserAuth()
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<ImageUploadItem[]>([])
  const [editing, setEditing] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const handleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignOut = async () => {
    try {
      await googleSignOut()
    } catch (error) {
      console.log(error)
    }
  }

  const onClickDelete = async () => {
    Dialog.confirm({
      content: 'Delete your account?',
      confirmText: 'Delete',
      onConfirm: async () => handleDelete(),
      cancelText: 'Cancel',
      closeOnMaskClick: true,
    })
  }

  const handleDelete = async () => {
    const auth = getAuth()
    const gU = auth.currentUser
    if (gU) {
      updateDocument('users', user.id, { active: false })
      deleteUser(gU).then(() => {
        Toast.show({
          position: 'top',
          content: 'Account deleted.',
        })
      }).catch((error) => {
        if (error.message.includes('requires-recent-login')) {
          handleSignOut()
          Toast.show({
            position: 'top',
            content: 'Please sign in and try again.',
          })
        } else {
          Toast.show({
            position: 'top',
            content: 'Error.',
          })
        }
      })
    }
  }

  const deletePhoto = () => {
    Dialog.confirm({
      content: 'Delete profile photo?',
      confirmText: 'Delete',
      onConfirm: () => deleteFile(`/users/${user.id}.webp`, deleteSuccess, deleteFailed),
      cancelText: 'Cancel',
      closeOnMaskClick: true,
    })
  }
  const deleteSuccess = () => {
    updateDocument('users', user.id, { photoUrl: '' })
    setFileList([])
    Toast.show({ position: 'top', content: 'Deleted successfully.' })
  }
  const deleteFailed = () => {
    setFileList([])
    Toast.show({ position: 'top', content: 'Delete Failed.' })
  }

  const onFinish = (values: any) => {
    const newValues = { 
      displayName: values.displayName,
    }
    updateDocument('users', user.id, newValues)
    Toast.show({ position: 'top', content: 'Saved successfully.' })
    setEditing(false)
  }

  const onUploadSuccess = (url:string) => {
    updateDocument('users', user.id, { photoUrl: url }).then(() => {
      setFileList([])
      Toast.show({ position: 'top', content: `Photo uploaded.` })
    })
  }
  const onCancel = () => {
    setFileList([])
  }

  useEffect(() => {
    getDocuments('users', setUsers)
  }, [])
  
  const user:any = users.find((u:User) => u.email === gUser?.email)

  return (
    <main>
      <div className='pad height-fill'>
        <div className='container text-center'>
          {!gUser 
          ? <div className={styles.btnContainer}>
              <Button block type='submit' color='primary' size='large' onClick={handleSignIn}>
                <GoogleIcon fill='var(--adm-color-white)' height='16px' />&nbsp;&nbsp;&nbsp;Sign in
              </Button>
            </div>
          : <div>
              {user &&
                <>
                  <Space justify='center' align='center' direction='vertical'>
                    <div className={styles.deleteBoundry}>
                      <ImageUploader
                        className={`${styles.uploader} ${styles.avatar}`}
                        style={{ '--cell-size': '100px', height: 100 }}
                        value={fileList}
                        onChange={setFileList}
                        upload={(file) => uploadImageFile(file, `users/${user.id}`, onUploadSuccess, onCancel)}
                        maxCount={1}
                        preview={false}
                        deletable={false}
                        disableUpload={editing}
                      >
                        <Image
                          src={user.photoUrl}
                          width={100}
                          height={100}
                          fit='cover'
                          className='avatar'
                        />
                      </ImageUploader>
                      {(user.photoUrl && !editing) &&
                        <Button
                          shape='rounded'
                          color='primary'
                          size='mini'
                          style={{ position: 'absolute', top: 0, right: 0, borderRadius: 5 }}
                          onClick={deletePhoto}
                        >
                          <DeleteOutline fontSize={16} />
                        </Button>
                      }
                    </div>
                  </Space>
                  <Form
                    form={form}
                    initialValues={user}
                    className={`${styles.center} ${editing ? styles.editing : ''}`}
                    style={{ '--border-top': '0px', '--border-bottom': '0px' }}
                  >
                    <Form.Item
                      name='displayName'
                      rules={[{ required: true, message: 'Name is required' }]}
                    >
                      <Input
                        readOnly={!editing}
                        onChange={console.log}
                        placeholder='Your Name'
                        style={{ '--text-align': 'center' }}
                      />
                    </Form.Item>
                    <Form.Item
                      name='email'
                      rules={[{ required: true, message: 'Name is required' }]}
                    >
                      <Input
                        readOnly
                        onChange={console.log}
                        placeholder='your@email.address'
                        style={{ '--text-align': 'center' }}
                      />
                    </Form.Item>
                  </Form>
                </>
              }
              <div className={styles.btnContainer}>
                {editing
                ? <Grid columns={2} gap='var(--adm-gap-sm)'>
                    <Grid.Item>
                      <Button
                        block
                        size='large'
                        onClick={() => {
                          form.resetFields()
                          setEditing(false)
                        }}
                      >
                        Cancel
                      </Button>
                    </Grid.Item>
                    <Grid.Item>
                      <Button
                        block
                        type='submit'
                        color='primary'
                        size='large'
                        onClick={() => onFinish(form.getFieldsValue())}
                      >
                        Save
                      </Button>
                    </Grid.Item>
                  </Grid>
                : <Button
                    block
                    size='large'
                    onClick={() => setEditing(true)}
                  >
                    Edit Profile
                  </Button>
                }
                <Divider />
                {user?.club
                ? <div><strong>{user.club}</strong></div>
                : <Link href='/join'>
                    <Button block type='submit' color='primary' size='large'>
                      Join or create a club
                    </Button>
                  </Link>
                }
                <Divider />
                <Space direction='vertical' className='adm-space-block'>
                  <Button block type='submit' color='primary' size='large' onClick={handleSignOut}>
                    Sign out
                  </Button>
                  <a className='underline color-danger' onClick={onClickDelete}>
                    <p>Deactivate account</p>
                  </a>
                </Space>
              </div>
            </div>
          }
        </div>
      </div>
    </main>
  )
}