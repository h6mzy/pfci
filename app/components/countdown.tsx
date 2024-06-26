import { Space } from 'antd-mobile'
import Countdown, { zeroPad } from 'react-countdown'
import styles from './countdown.module.sass'

export default function ReactCountdown({ date }:any) {
  const timeRenderer = ({ days, hours, minutes, seconds }: any) => (
    <Space
      block
      justify='stretch'
      align='center'
      className={styles.countdown}
      style={{ '--gap-horizontal': '0px' }}
    >
      <span><strong>{zeroPad(days)}</strong><small>DAY</small></span>
      <span><strong>:</strong><small>&nbsp;</small></span>
      <span><strong>{zeroPad(hours)}</strong><small>HOUR</small></span>
      <span><strong>:</strong><small>&nbsp;</small></span>
      <span><strong>{zeroPad(minutes)}</strong><small>MIN</small></span>
      <span><strong>:</strong><small>&nbsp;</small></span>
      <span><strong>{zeroPad(seconds)}</strong><small>SEC</small></span>
    </Space>
  )
  return (
    <Countdown date={date} renderer={timeRenderer} />
  )
}