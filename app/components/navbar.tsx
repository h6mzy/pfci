'use client'

import { usePathname } from 'next/navigation'
import { Button, List, Popup, Space, TabBar, Tabs } from 'antd-mobile'
import Link from 'next/link'
import styles from './navbar.module.sass'
import { CalendarOutline, CheckShieldOutline, CloseOutline, FileOutline, MoreOutline, TeamOutline, UserCircleOutline } from 'antd-mobile-icons'
import { useState } from 'react'
import { UserAuth } from '../_lib/auth-context'

const Navbar = () => {

  const pathname = usePathname()
  const activeKey = pathname.split('/').filter(n => n)[0] || ''

  const [visible, setVisible] = useState(false)

  const TabLink = ({ href, title }: { href: string, title: string }) => (
    <Link className={styles.link} href={href}>{title}</Link>
  )

  const navItems = [
    { key: 'about', title: 'About' },
    { key: 'contact', title: 'Contact' },
  ]

  const iconSize = 24

  const Logo = () => (
    <Link href='/' onClick={() => setVisible(false)}>
      <Button fill='none' color='primary' className={styles.height}>
        <strong>GO</strong>
      </Button>
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

  return (
    <>
      <div className={styles.top}>
        <Space justify='between' block className='align-stretch'>
          <Logo />
          <>
            <Tabs
              defaultActiveKey={null}
              activeKey={activeKey}
              className={`tabs-borderless ${styles.tabs}`}
            >
              {navItems.map(tab =>
                <Tabs.Tab
                  key={tab.key}
                  title={<TabLink href={`/${tab.key}`} title={tab.title} />}
                  className={`${styles.height} ${styles.tab}`}
                />
              )}
            </Tabs>
            <Link href='/user'>
              <Button fill='none' className={styles.height}>
                <UserCircleOutline fontSize={iconSize} color='var(--adm-color-weak)' />
              </Button>
            </Link>
            <Button
              fill='none'
              color='primary'
              onClick={() => setVisible(true)}
              className={`hide-on-lg ${styles.height}`}
            >
              <MoreOutline
                fontSize={iconSize}
                color='var(--adm-color-weak)'
                className={styles.more}
              />
            </Button>
          </>
        </Space>
      </div>
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
          position='right'
          bodyStyle={{ width: '100%' }}
          onClose={() => { setVisible(false) }}
        >
          <Space block justify='between' align='center'>
            <Logo />
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