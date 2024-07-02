'use client'

import { Grid, List } from 'antd-mobile'
import { players } from './_lib/players'
import styles from './components/lineup.module.sass'
import PlayerCard from './components/player-card'
import AffixedBar from './components/affixed-bar'
import LineUpCard from './components/lineup-card'

export default function Home() {
  return (
    <main>
      <AffixedBar date={`2024-07-12T09:00:00`} label='Kick off' />
      <div className={`pad ${styles.pitch}`}>
        <p className='color-primary text-center'>Confirmed Attendees</p>
        <Grid columns={3} gap='var(--adm-gap)' style={{ alignItems: 'center' }}>
          {players.map((player, playerIndex) => (
            <Grid.Item key={playerIndex}>
              <LineUpCard player={player} />
            </Grid.Item>
          ))}
          {players.map((player, playerIndex) => (
            <Grid.Item key={`a${playerIndex}`}>
              <LineUpCard player={player} available={false} tag={playerIndex % 2 === 0 ? 'Unavailable' : 'Injured'} />
            </Grid.Item>
          ))}
        </Grid>
      </div>
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