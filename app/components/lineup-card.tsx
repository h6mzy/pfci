'use client'

import { Image, Tag } from 'antd-mobile'
import styles from './lineup.module.sass'
import { Player } from '../_lib/players'
import FixedAspectRatio from './fixed-aspect-ratio'

export interface LineUpProps {
  player: Player
  available?: boolean
  tag?: string
}

const colors = [
  { key: 'Injured', color: 'danger', },
  { key: 'Unavailable', color: 'warning', },
]

const LineUpCard = ({ player, available = true, tag = 'Unavailable' }: LineUpProps) => {
  const { name, squad_number, photo } = player
  const status = available ? '' : styles.unavailable
  const color = colors.find(c => c.key === tag)?.color
  return (
    <div className={`${styles.card} ${status}`}>
      <div className={styles.content}>
        <FixedAspectRatio>
          <div className={styles.squad_number}>{squad_number}</div>
          <Image className={styles.photo} src={photo} fit='contain' />
        </FixedAspectRatio>
        <div className={styles.name}>{name}</div>
        <div className={styles.tag}>
          <Tag fill='outline' color={color}>{tag}</Tag>
        </div>
      </div>
    </div>
  )
}   

export default LineUpCard