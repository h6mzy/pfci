'use client'

import { club as NS } from '../_lib/club'
import { Button, CheckList, Image, InfiniteScroll, Popup, SearchBar, Space } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { getDocuments } from '../_lib/firebase/getDocuments'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { CheckOutline, ExclamationShieldOutline } from 'antd-mobile-icons'
import styles from '../components/form.module.sass'
import Link from 'next/link'

export default function JoinPage() {

  const data:any = []
  for(let i = 1; i < 100; i++) {
    data.push({ id: `${i}`, name: `Club Name ${i} FC` })
  }
  const length = 12
  const [count, setCount] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [selected, setSelected] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const total = data.length

  async function loadMore() {
    await sleep(750) // milliseconds
    if (count < total) {
      setCount(count+length)
    }
    setHasMore(count < total)
  }

  useEffect(() => {
    //getDocuments('clubs', setClubs)
  }, [])

  const onSearchBarChange = (value:string) => {
    setSearch(value)
  }

  const result = data.find((c:any) => c.id === selected)

  return (
    <main>
      <div className='pad'>
        <div className='container'>
          <p><strong>Clubs</strong></p>
          <SearchBar
            placeholder='Manchester United'
            onChange={onSearchBarChange}
            style={{ marginBottom: 'var(--adm-gap-sm)' }}
          />
          <CheckList
            className='checklist-no-border'
            style={{ '--padding-left': '0px' }}
            onChange={(value:any) => setSelected(value[0])}
            value={[selected]}
          >
            {data
              .filter((c:any) => c.name.includes(search))
              .slice(0, count)
              .map((club: any) => 
              <CheckList.Item key={club.id} value={club.id}>
                <Space align='center'>
                  <Image
                    src={NS.logo}
                    fit='cover'
                    width={30}
                    height={30}
                  />
                  <div>{club.name}</div>
                </Space>
              </CheckList.Item>
            )}
          </CheckList>
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasMore}
          />
          <div className={styles.btnContainer}>
            <Link href='/create-club'>
              <Button block size='large'>Create a club <ExclamationShieldOutline /></Button>
            </Link>
          </div>
          <Popup
            visible={!!selected}
            closeOnMaskClick
            onClose={() => setSelected('')}
          >
            <Button block size='large' color='primary' shape='rectangular'>
              <Space className='adm-space-block' justify='center' align='center'>
                <span>
                  Request to join {result?.name || ''}
                </span>
                <CheckOutline />
              </Space>
            </Button>
          </Popup>
        </div>
      </div>
    </main>
  )
}