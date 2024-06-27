'use client'

import { Card, List, Swiper } from 'antd-mobile'
import { sessions } from '../_lib/sessions'
import FixedAspectRatio from '../components/fixed-aspect-ratio'
import { players } from '../_lib/players'
import AffixedBar from '../components/affixed-bar'

export default function Sessions() {

  function getPlayerName(num:number) {
    return players.find(p => p.squad_number === num)?.name || ''
  }

  return (
    <main>
      <AffixedBar label='Next session' />
      <div className='pad'>
        <h1 className='text-center'>Sessions</h1>
        <List
          style={{ 
            '--border-top': '0px',
            '--border-bottom': '0px',
            '--padding-left': '0px',
            '--padding-right': '0px',
          }}
        >
          {sessions.map((session, sessionIndex) =>
            <List.Item key={sessionIndex}>
              <Swiper stuckAtBoundary={false} slideSize={30}>
                {session.players.map((player_num, playerIndex) =>
                  <Swiper.Item key={playerIndex}>
                    <Card style={{ border: '1px solid var(--adm-color-primary)' }}>
                    <FixedAspectRatio>
                      {getPlayerName(player_num)}
                    </FixedAspectRatio></Card>
                  </Swiper.Item>
                )}
              </Swiper>
            </List.Item>
          )}
        </List>
      </div>
    </main>
  )
}