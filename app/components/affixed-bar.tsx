import Affix from '@uiw/react-affix'
import styles from './navbar.module.sass'
import { Space } from 'antd-mobile'
import { AppleWatchNike } from './icons'
import dynamic from 'next/dynamic'

const DynamicCountdown = dynamic(() => import('./countdown'), {
  ssr: false,
})

interface AffixBarProps {
  date: string,
  label?: string,
}

const AffixedBar = ({ date, label = 'Kick off' }:AffixBarProps) => (
  <Affix offsetTop={0}>
    <div className={styles.barGradient}>
      <Space
        block
        align='center'
        className={styles.countdownBar}
        style={{ '--gap-horizontal': 'var(--adm-gap)' }}
      >
        <div className='text-center'>
          <div><small>{label}</small></div>
          <AppleWatchNike width='94px' />
        </div>
        <DynamicCountdown date={date} />
      </Space>
    </div>
  </Affix>
)

export default AffixedBar