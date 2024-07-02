'use client'

import { Image } from 'antd-mobile'
import styles from './lineup.module.sass'
import { Player } from '../_lib/players'
import FixedAspectRatio from './fixed-aspect-ratio'

export interface LineUpProps {
  player: Player
}

const LineUpCard = ({ player }: LineUpProps) => {
  const { name, squad_number, role, photo, country } = player
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <FixedAspectRatio>
          <div className={styles.squad_number}>{squad_number}</div>
          <Image className={styles.photo} src={photo} fit='contain' />
        </FixedAspectRatio>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  )
}   

export default LineUpCard