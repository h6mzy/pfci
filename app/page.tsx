'use client'

import { Button, Grid, Image, Space } from 'antd-mobile'
import { project_details } from './_lib/project'
import Link from 'next/link'
import Stat from './components/stat'

export default function Home() {
  return (
    <main>
      <div className='pad'>
        {/*
        <div className='text-center'>
          <h1>Welcome to {project_details.title} Apps</h1>
        </div>
        <div className='container'>
          <p>Design and build your web apps with {project_details.title}. Works in all modern browsers.</p>
          <Grid columns={2} gap={12} className='pad-t'>
            <Link href='/about'>
              <Button block fill='outline' style={{ '--border-color': 'var(--adm-color-light)' }}>
                How it works
              </Button>
            </Link>
            <Link href='/contact'>
              <Button block color='primary'>
                Get started
              </Button>
            </Link>
          </Grid>
        </div>
        */}
        <div className='container'>
          <p className='text-center uppercase color-weak'>In Form</p>
          <Stat
            value={12}
            label='Consecutive matches unbeaten'
            src='/clubs/LCS.webp'
          />
        </div>
      </div>
    </main>
  )
}