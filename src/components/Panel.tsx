"use client"

import React from 'react'
import SecondaryHeader from './SecondaryHeader'
import CodePanel from './CodePanel'
import PreviewPanel from './PreviewPanel'
import ReviewPanel from './ReviewPanel'
import { useCodeStore } from '@/store/codeStore'
import TheFooter from './TheFooter'

const Panel = () => {
  const { mode, panel } = useCodeStore()
  const isCodePanel = panel === 'code'
  return (
    <section className='max-w-6xl mx-auto'>
      <SecondaryHeader />
      <section className='w-full flex gap-8 h-[73vh] mt-4'>
        <div className={`${isCodePanel ? 'w-full' : 'hidden'} p-1 md:w-1/2 md:block bg-primary-50 h-full`}>
          <CodePanel />
        </div>
        <div className={`${!isCodePanel ? 'w-full' : 'hidden'} p-1 md:w-1/2 md:block`}>
          <div className='h-full w-full bg-white p-4 overflow-auto'>
            {mode === 'code' ? <PreviewPanel /> : <ReviewPanel />}
          </div>
        </div>
      </section>
      <TheFooter />
    </section>
  )
}

export default Panel
