'use client'

import { Grid } from 'antd-mobile'
import { players } from '../_lib/players'
import SquadCard from '../components/lineup-card'

export default function Squad() {
  return (
    <main>
      <div className='pad'>
        <h1 className='text-center'>The Squad</h1>
        <Grid columns={2} gap='var(--adm-gap-sm)'>
          {players.map((player, playerIndex) => (
            <Grid.Item key={playerIndex}>
              <SquadCard player={player} />
            </Grid.Item>
          ))}
        </Grid>
      </div>
    </main>
  )
}