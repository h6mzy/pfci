'use client'

import { Image, List, Space, Swiper } from 'antd-mobile'
import { sessions } from '../_lib/sessions'
import FixedAspectRatio from '../components/fixed-aspect-ratio'
import { players } from '../_lib/players'
import AffixedBar from '../components/affixed-bar'
import dayjs from 'dayjs'
import styles from './session.module.sass'

export default function Sessions() {

  function getPlayer(num:number) {
    return players.find(p => p.squad_number === num)
  }

  return (
    <main>
      <AffixedBar label='Next session' />
      <h1 className='text-center'>Sessions</h1>
      <div>
        {sessions.map((session, sessionIndex) =>
          <Space
            block
            justify='stretch'
            className={styles.row}
            style={{ '--gap': '0px' }}
            key={sessionIndex}
          >
            <div className={styles.card} style={{ background: 'var(--adm-color-background)', zIndex: 1, position: 'relative' }}>
              <FixedAspectRatio ratio={[4,5]}>
                <div>
                {dayjs(session.date).format('D')}<br />
                {dayjs(session.date).format('MMM')}</div>
              </FixedAspectRatio>
            </div>
            <Swiper
              //stuckAtBoundary={false}
              slideSize={33.33}
              indicator={() => null}
              style={{ overflow: 'visible' }}
            >
              {session.players.map((player_num, playerIndex) => {
                const player:any = getPlayer(player_num)
                const { name, photo, squad_number } = player
                return (
                  <Swiper.Item key={playerIndex}>
                    <div className={styles.card}>
                      <FixedAspectRatio ratio={[4,5]}>
                        <div className={styles.number}>{squad_number}</div>
                        <Image src={photo} fit='cover' style={{ '--height': '100%', zIndex: 1 }} />
                        <div className={styles.name}>{name}</div>
                      </FixedAspectRatio>
                    </div>
                  </Swiper.Item>
                )
              })}
            </Swiper>
          </Space>
        )}
      </div>
    </main>
  )
}