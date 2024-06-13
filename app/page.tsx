'use client'

import { Button, Grid, Image, Space } from 'antd-mobile'
import { project_details } from './_lib/project'
import Link from 'next/link'
import Stat from './components/stat'
import LineUp from './components/lineup'
import { players } from './_lib/players'

export default function Home() {
  return (
    <main>
      <div className='pad'>
        <LineUp players={players} />
      </div>
    </main>
  )
}