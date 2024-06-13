'use client'

import { Image, Space } from 'antd-mobile'
import styles from './stat.module.sass'

export interface StatProps {
  value: number | string
  label?: string
  src?: string
}

const Stat = ({ 
  value,
  label = '',
  src = '',
}: StatProps) => {
  return (
    <Space align='center' className={styles.stat}>
      <Image src={src} fit='contain' width={72} />
      <div>
        <Space align='center' className={styles.stat}>
          <strong className={styles.value}>{value}</strong>
          <span className={styles.label}>{label}</span>
        </Space>
      </div>
    </Space>
  )
}   

export default Stat       