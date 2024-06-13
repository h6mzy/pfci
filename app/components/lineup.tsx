'use client'

import { Image, List, Space } from 'antd-mobile'
import styles from './lineup.module.sass'
import { Player } from '../_lib/players'

export interface LineUpProps {
  players?: Player[]
}

const LineUp = ({
  players = [],
}: LineUpProps) => {
  return (
    <List
      header='Confirmed'
      className={styles.lineup}
      style={{ 
        '--border-top': '0px', 
        '--padding-left': '0px', 
      }}
    >
      {players.map((player, playerIndex) => {
        const { name, squad_number, photo, role } = player
        return (
          <List.Item
            key={playerIndex}
            prefix={
              <Space align='center' justify='stretch' className={styles.prefix}>
                <Image
                  src={`/images/clubs/NWS.webp`}
                  style={{ borderRadius: 20 }}
                  fit='cover'
                  width={80}
                  height={80}
                />
                <strong className={styles.number}>{squad_number}</strong>
              </Space>
            }
            description={role}
          >
            {name}
          </List.Item>
        )
      })}
    </List>
  )
}   

export default LineUp       