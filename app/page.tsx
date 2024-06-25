'use client'

import { List } from 'antd-mobile'
import { players } from './_lib/players'
import styles from './components/lineup.module.sass'
import PlayerCard from './components/player-card'

export default function Home() {
  return (
    <main>
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