'use client'

import { Image, List, Space } from 'antd-mobile'
import { players } from './_lib/players'
import styles from './components/lineup.module.sass'
import navStyles from './components/navbar.module.sass'
import PlayerCard from './components/player-card'
import Affix from '@uiw/react-affix'
import Countdown, { zeroPad } from 'react-countdown'
import { AppleWatchNike } from './components/icons'

export default function Home() {

  const timeRenderer = ({ days, hours, minutes, seconds }: any) => (
    <Space
      block
      justify='stretch'
      align='center'
      className={navStyles.countdown}
      style={{ '--gap-horizontal': '0px' }}
    >
      <span><strong>{zeroPad(days)}</strong><small>DAY</small></span>
      <span><strong>:</strong><small>&nbsp;</small></span>
      <span><strong>{zeroPad(hours)}</strong><small>HOUR</small></span>
      <span><strong>:</strong><small>&nbsp;</small></span>
      <span><strong>{zeroPad(minutes)}</strong><small>MIN</small></span>
      <span><strong>:</strong><small>&nbsp;</small></span>
      <span><strong>{zeroPad(seconds)}</strong><small>SEC</small></span>
    </Space>
  )
  
  return (
    <main>
      <Affix offsetTop={0}>
        <div className={navStyles.bar}>
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
            <Countdown date={`2024-06-29T18:00:00`} renderer={timeRenderer} />
          </Space>
        </div>
      </Affix>
      <List
        className={styles.lineup}
        style={{ 
          '--border-top': '0px',
          '--border-bottom': '0px',
          //'--padding-left': '0px',
          //'--padding-right': '0px',
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