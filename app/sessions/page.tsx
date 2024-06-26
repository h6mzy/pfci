'use client'

import { List } from 'antd-mobile'
import { sessions } from '../_lib/sessions'

export default function Sessions() {
  return (
    <main>
      <div className='pad'>
        <h1 className='text-center'>Sessions</h1>
        <List>
          {sessions.map((session, sessionIndex) =>
            <List.Item key={sessionIndex}>
              {session.players.join(', ')}
            </List.Item>
          )}
        </List>
      </div>
    </main>
  )
}