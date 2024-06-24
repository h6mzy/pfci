'use client'

import { usePathname } from 'next/navigation'
import { Button, Card, Image, List, Popup, Space, TabBar, Tabs } from 'antd-mobile'
import Link from 'next/link'
import styles from './navbar.module.sass'
import { AppOutline, CalendarOutline, CheckShieldOutline, CloseOutline, FileOutline, MoreOutline, TeamOutline, UserCircleOutline, UserOutline } from 'antd-mobile-icons'
import { useEffect, useState } from 'react'
import { UserAuth } from '../_lib/auth-context'
import Countdown, { zeroPad } from 'react-countdown'
import Affix from '@uiw/react-affix'

const Navbar = () => {

  const pathname = usePathname()
  const activeKey = pathname.split('/').filter(n => n)[0] || ''

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      'dark',
    )
  }, [])

  const TabLink = ({ href, title }: { href: string, title: string }) => (
    <Link className={styles.link} href={href}>{title}</Link>
  )

  const navItems = [
    { key: 'about', title: 'About' },
    { key: 'contact', title: 'Contact' },
  ]

  const Logo = () => (
    <Link href='/' onClick={() => setVisible(false)}>
      <Image src='/images/clubs/PFC.webp' width={60} height={60} />
    </Link>
  )

  const tabs = [
    {
      key: '/',
      icon: <FileOutline />,
    },
    {
      key: '/fixtures',
      icon: <CalendarOutline />,
    },
    {
      key: '/club',
      icon: <CheckShieldOutline />,
    },
    {
      key: '/squad',
      icon: <TeamOutline />,
    },
  ]

  const timeRenderer = ({ days, hours, minutes, seconds }: any) => (
    <Space block justify='stretch' className={styles.countdown} style={{ '--gap-horizontal': '0px' }}>
      <span>{zeroPad(days)}</span>
      <span>:</span>
      <span>{zeroPad(hours)}</span>
      <span>:</span>
      <span>{zeroPad(minutes)}</span>
      <span>:</span>
      <span>{zeroPad(seconds)}</span>
    </Space>
  )

  return (
    <>
      <div>
        <Space
          block
          justify='between'
          align='center'
          className={`${styles.bar} ${styles.top}`}
        >
          <AppOutline fontSize={24} onClick={() => setVisible(true)} />
          <Logo />
          <UserOutline fontSize={22} />
        </Space>
        </div>
        <Affix offsetTop={0}>
          <div className={styles.bar}>
            <Space
              block
              align='center'
              className={styles.countdownBar}
              style={{ '--gap-horizontal': 'var(--adm-gap)' }}
            >
              <div className='text-center'>
                <div><small>Kick off</small></div>
                <Image src='/images/time_sponsor.webp' width={100} height='auto' />
              </div>
              <Countdown date={`2024-06-29T18:00:00`} renderer={timeRenderer} />
            </Space>
          </div>
        </Affix>
      <div className={styles.btm}>
        <TabBar className={styles.tabbar}>
          {tabs.map(item => (
            <TabBar.Item
              key={item.key}
              icon={<Link href={item.key}>{item.icon}</Link>}
            />
          ))}
        </TabBar>
      </div>
      <div className='hide-on-lg'>
        <Popup
          visible={visible}
          onMaskClick={() => { setVisible(false) }}
          position='left'
          bodyStyle={{ width: '100%' }}
          onClose={() => { setVisible(false) }}
        >
          <Space block justify='between' align='center'>
            <Button
              fill='none'
              style={{ '--text-color': 'var(--adm-color-weak)' }}
              className={styles.height}
            >
              Welcome
            </Button>
            <Button
              fill='none'
              onClick={() => { setVisible(false) }}
              style={{ '--text-color': 'var(--adm-color-weak)' }}
              className={styles.height}
            >
              <CloseOutline fontSize={20} />
            </Button>
          </Space>
          <List>
            {navItems.map(item =>
              <Link
                key={item.key}
                href={`/${item.key}`}
                className={styles.link}
                onClick={() => setVisible(false)}
              >
                <List.Item>
                  {item.title}
                </List.Item>
              </Link>
            )}
          </List>
        </Popup>
      </div>
    </>
  )
}

export default Navbar