'use client'

import { Image, Space, Tag } from 'antd-mobile'
import styles from './squad.module.sass'
import { Player } from '../_lib/players'
import FixedAspectRatio from './fixed-aspect-ratio'

export interface SquadCardProps {
  player: Player
}

const SquadCard = ({ player }: SquadCardProps) => {
  const { name, squad_number, role, photo, country } = player
  return (
    <div className={styles.card}>
      <FixedAspectRatio>
        <div className={styles.content}>
          <div className={styles.squad_number}>{squad_number}</div>
          <Image className={styles.photo} src={photo} fit='contain' />
          <div className={styles.details}>
            <div className={styles.name}>{name}</div>
            <Image width={30} src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${country}.svg`} className={styles.country} />
          </div>
        </div>
      </FixedAspectRatio>
    </div>
  )
}   

export default SquadCard