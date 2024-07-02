'use client'

import { List } from 'antd-mobile'
import { players } from '../_lib/players'
import PlayerCard from '../components/player-card'
import styles from '../components/player.module.sass'
import Link from 'next/link'
import { UserContactOutline } from 'antd-mobile-icons'

export default function Squad() {
  return (
    <main>
      <h1 className='text-center'>The Squad</h1>
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
              <Link href={`/player/${player.squad_number}`}>
                <UserContactOutline fontSize={30} className={styles.more} />
              </Link>
            </List.Item>
          )
        })}
      </List>
    </main>
  )
}