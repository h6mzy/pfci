'use client'

import { List, Space } from 'antd-mobile'
import { players } from './_lib/players'
import styles from './components/lineup.module.sass'
import navStyles from './components/navbar.module.sass'
import PlayerCard from './components/player-card'
import Affix from '@uiw/react-affix'
import { AppleWatchNike } from './components/icons'
import dynamic from 'next/dynamic'

const DynamicCountdown = dynamic(() => import('./components/countdown'), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      <Affix offsetTop={0}>
        <div className={navStyles.barGradient}>
          <Space
            block
            align='center'
            className={navStyles.countdownBar}
            style={{ '--gap-horizontal': 'var(--adm-gap)' }}
          >
            <div className='text-center'>
              <div><small>Kick off</small></div>
              <AppleWatchNike width='94px' />
            </div>
            <DynamicCountdown date={`2024-06-29T18:00:00`} />
          </Space>
        </div>
      </Affix>
      <List
        className={styles.lineup}
        style={{ 
          '--border-top': '0px',
          '--border-bottom': '0px',
        }}
      >
        {players.map((player, playerIndex) => {
          return (
            <List.Item key={playerIndex}>
              <PlayerCard player={player} />
            </List.Item>
          )
        })}
      </List>
    </main>
  )
}