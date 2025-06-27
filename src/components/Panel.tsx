"use client"

import React from 'react'
import SecondaryHeader from './SecondaryHeader'
import CodePanel from './CodePanel'
import PreviewPanel from './PreviewPanel'
import ReviewPanel from './ReviewPanel'
import { useCodeStore } from '@/store/codeStore'

const Panel = () => {
  const { mode } = useCodeStore()
  return (
    <section className='max-w-6xl mx-auto my-10'>
      <SecondaryHeader />
      <section className='w-full flex gap-8 h-[70vh] mt-4'>
        <div className='w-1/2 bg-primary-50 h-full'>
          <CodePanel />
        </div>
        <div className='w-1/2'>
          <div className='h-full w-full bg-white p-4 overflow-auto'>
            {mode === 'code' ? <PreviewPanel /> : <ReviewPanel />}
          </div>
        </div>
      </section>
    </section>
  )
}

export default Panel
