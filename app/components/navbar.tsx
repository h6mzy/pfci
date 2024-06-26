'use client'

import { usePathname } from 'next/navigation'
import { Button, Image, List, Popup, Space, TabBar } from 'antd-mobile'
import Link from 'next/link'
import styles from './navbar.module.sass'
import { CalendarOutline, CloseOutline, GlobalOutline, StarOutline, TeamOutline } from 'antd-mobile-icons'
import { useEffect, useState } from 'react'
import { UserAuth } from '../_lib/auth-context'
import { CircleIcon, MenuIcon } from './icons'

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
      icon: <GlobalOutline fontSize={23} />,
    },
    {
      key: '/sessions',
      icon: <CalendarOutline fontSize={23} />,
    },
    {
      key: '/stats',
      icon: <StarOutline fontSize={23} />,
    },
    {
      key: '/squad',
      icon: <TeamOutline fontSize={23} />,
    },
  ]

  return (
    <>
      <Space
        block
        justify='between'
        align='center'
        className={`${styles.bar} ${styles.top}`}
      >
        <a onClick={() => setVisible(true)}>
          <MenuIcon />
        </a>
        <Logo />
        <a onClick={() => setVisible(true)}>
          <CircleIcon />
        </a>
      </Space>
      <div className={styles.btm}>
        <TabBar className={styles.tabbar} activeKey={activeKey}>
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