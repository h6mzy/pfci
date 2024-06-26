'use client'

import { Avatar, List, Space } from 'antd-mobile'
import { players } from '../_lib/players'
import { stats } from '../_lib/stats'
import { StarFill, StarOutline } from 'antd-mobile-icons'
import styles from './stats.module.sass'

export default function Stats() {

  function last5Desc (record:number[]) {
    return (record.slice(-5).reverse())
  }

  function getPlayerFromNumber (squad_number:number | undefined) {
    return (players.find(p => p.squad_number === squad_number))
  }
  
  const playersWithStats = stats.sort((a, b) => {
    // get last 5 appearances sort by most recent
    const aLast5 = last5Desc(a.record)
    const bLast5 = last5Desc(b.record)
    // 1 point for 1 appearance
    let aPoints = aLast5.reduce((a, b) => a + b, 0)
    let bPoints = bLast5.reduce((a, b) => a + b, 0)
    // extra points for recent appearances
    // bonus points for consecutive appearances
    let aConsecutive = 0, bConsecutive = 0
    for (let i = 0; i < 5; i++) {
      const points = 5 - i
      if (aLast5[i] > 0) {
        aPoints += points
        if (aLast5[i-1] && aLast5[i-1] > 0) aConsecutive ++
      }
      if (bLast5[i] > 0) {
        bPoints += points
        if (bLast5[i-1] && bLast5[i-1] > 0) bConsecutive ++
      }
    }
    return bPoints - aPoints
  })

  const stars = (record: number[]) => (
    record.map((val, valIndex) => (
      val > 0
      ? <StarFill key={valIndex} />
      : <StarOutline key={valIndex} />
    ))
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
          {playersWithStats.map((stat, statIndex) => {
            const player = getPlayerFromNumber(stat.player)
            const record = last5Desc(stat.record)
            if (player) return (
              <List.Item key={statIndex}>
                <Space block justify='between' align='center'>
                  <Space align='center'>
                    <Avatar src={player.photo} fit='cover' style={{ '--border-radius': '50%' }} />
                    <span>{player.name}</span>
                  </Space>
                  <span className='color-primary'>{stars(record)}</span>
                </Space>
              </List.Item>
            )
          })}
        </List>
      </div>
    </main>
  )
}