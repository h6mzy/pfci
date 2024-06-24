'use client'

import { Image, List, Space } from 'antd-mobile'
import styles from './player.module.sass'
import { Player } from '../_lib/players'
import FixedAspectRatio from './fixed-aspect-ratio'
import { countries } from 'country-flag-icons'

export interface PlayerCardProps {
  player: Player
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const { name, squad_number, role, photo, country } = player
  return (
    <div className={styles.card}>
      <FixedAspectRatio ratio={[2.8,1]}>
        <div className={styles.content}>
          <div className={styles.squad_number}>{squad_number}</div>
          <Image className={styles.photo} src={photo} fit='contain' />
          <Space
            block
            direction='vertical'
            justify='between'
            className={styles.details}
            style={{ '--gap': '0px' }}
          >
            <div className={styles.name}>{name}</div>
            <Space align='center' style={{ '--gap-horizontal': 'var(--adm-gap-sm)' }}>
              <Image width={30} src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${country}.svg`} />
              <div className='color-weak'>{role}</div>
            </Space>
          </Space>
        </div>
      </FixedAspectRatio>
    </div>
  )
}   

export default PlayerCard