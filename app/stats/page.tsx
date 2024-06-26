'use client'

import { Avatar, List, Space } from 'antd-mobile'
import { players } from '../_lib/players'
import { StarFill, StarOutline } from 'antd-mobile-icons'
import styles from './stats.module.sass'
import { sessions } from '../_lib/sessions'

export default function Stats() {

  const withStats = players.reduce((acc, cur) => {
    const appearances = sessions.map(s => s.players.includes(cur.squad_number))
    const points =  calculatePoints(appearances)
    const player:any = Object.assign(cur, {
      appearances,
      points,
    })
    acc.push(player)
    return acc
  }, [] as any)
  
  function calculatePoints(appearances:boolean[]) {
    // number of appearances in last 5
    let total = appearances.filter(Boolean).length
    let consecutive = 0
    // extra points for consecutive
    for (let i = 0; i < 5; i++) {
      const points = 5 - i
      if (appearances[i]) {
        total += points
        if (appearances[i-1]) consecutive ++
      }
    }
    return total + consecutive
  }

  function sortMostPoints(players:any) {
    return players.sort((a:any, b:any) => b.points - a.points)
  }

  const stars = (appearances: boolean[]) => (
    appearances.map((val, valIndex) => 
      val ? <StarFill key={valIndex} /> : <StarOutline key={valIndex} />
    )
  )
  
  return (
    <main>
      <div className='pad'>
        <h1 className='text-center'>Top Appearances</h1>
        <List
          style={{ 
            '--border-top': '0px',
            '--border-bottom': '0px',
            '--padding-left': '0px',
            '--padding-right': '0px',
          }}
          header={<div className='text-right'>Last 5 Sessions</div>}
          className={styles.stats}
        >
          {sortMostPoints(withStats).map((player:any, playerIndex:any) => 
            <List.Item key={playerIndex}>
              <Space block justify='between' align='center'>
                <Space align='center'>
                  <Avatar src={player.photo} fit='cover' />
                  <span>{player.name}</span>
                </Space>
                <span className='color-primary'>{stars(player.appearances)}</span>
              </Space>
            </List.Item>
          )}
        </List>
      </div>
    </main>
  )
}