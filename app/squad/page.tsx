'use client'

import { Grid } from 'antd-mobile'
import { players } from '../_lib/players'
import SquadCard from '../components/squad-card'

export default function Squad() {
  return (
    <main>
      <div className='pad'>
        <h1 className='text-center'>SQUAD</h1>
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