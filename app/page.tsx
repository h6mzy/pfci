'use client'

import { Grid, List } from 'antd-mobile'
import { players } from './_lib/players'
import styles from './components/lineup.module.sass'
import PlayerCard from './components/player-card'
import AffixedBar from './components/affixed-bar'
import SquadCard from './components/squad-card'

export default function Home() {
  return (
    <main>
      <AffixedBar date={`2024-07-12T09:00:00`} label='Kick off' />
      <div className='pad'>
        <p className='color-primary text-center'>Confirmed Attendees</p>
        <Grid columns={3} gap='var(--adm-gap-sm)'>
          {players.map((player, playerIndex) => (
            <Grid.Item key={playerIndex}>
              <SquadCard player={player} />
            </Grid.Item>
          ))}
        </Grid>
        <p className='color-weak text-center'>Unavailable</p>
        <Grid columns={3} gap='var(--adm-gap-sm)' style={{ filter: 'grayscale(1)', opacity: .65 }}>
          {players.map((player, playerIndex) => (
            <Grid.Item key={playerIndex}>
              <SquadCard player={player} />
            </Grid.Item>
          ))}
        </Grid>
      </div>
      {/*
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
      */}
    </main>
  )
}