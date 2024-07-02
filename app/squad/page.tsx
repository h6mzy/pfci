'use client'

import { List } from 'antd-mobile'
import { players } from '../_lib/players'
import PlayerCard from '../components/player-card'
import styles from '../components/player.module.sass'

export default function Squad() {
  return (
    <main>
      <div className='pad-x'>
        <h1 className='text-center'>The Squad</h1>
      </div>
      <List
        className={styles.squad}
        style={{ 
          '--border-top': '0px',
          '--border-bottom': '0px',
          '--padding-left': '0px',
          '--padding-right': '0px',
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