'use client'

import { Grid } from 'antd-mobile'
import { players } from './_lib/players'
import styles from './components/lineup.module.sass'
import AffixedBar from './components/affixed-bar'
import LineUpCard from './components/lineup-card'

export default function Home() {
  return (
    <main>
      <AffixedBar date={`2024-07-12T09:00:00`} label='Kick off' />
      <div className={`pad ${styles.pitch}`}>
        <h1 className='text-center'>Players</h1>
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
    </main>
  )
}