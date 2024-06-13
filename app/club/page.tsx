'use client'

import { club } from '../_lib/club'
import { Image, Space, Switch } from 'antd-mobile'
import { useState } from 'react'

export default function Clubs() {

  const [checked, setChecked] = useState(false)

  return (
    <main>
      <div className='pad height-fill'>
        <div className='container text-center'>
          <Space align='center' style={{ marginBottom: 'var(--adm-gap)' }}>
            <div>{checked ? 'Logout' : 'Login'}</div>
            <Switch
              checked={checked}
              onChange={(value) => setChecked(value)}
            />
          </Space> 
        </div>
      </div>
    </main>
  )
}