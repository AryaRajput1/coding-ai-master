'use client';

import React from 'react'
import { Play } from 'lucide-react';
import Button from './Button'
import { useCodeStore } from '@/store/codeStore';

const SecondaryHeader = () => {
    const { runCode, isRunning, mode, changeMode, changeLiveReview, liveReview } = useCodeStore()
    return (
        <section className='h-16 bg-primary-50 flex justify-end items-center px-4 gap-2 text-white'>
            <Button onClick={changeLiveReview} className='border-none rounded-md p-1 px-4 text-binge-900'>Live Review: {liveReview ? 'On' : 'Off'}</Button>
            <Button onClick={changeMode} className='border-none rounded-md p-1 px-4 text-binge-900'>{mode === 'code' ? 'Code' : 'Review'}</Button>
            <span className='border-none rounded-md p-1 px-4 text-binge-900'>Javascript</span>
            <div>
                <Button className='px-0' onClick={runCode}>
                    {isRunning ? 'Running....' : 'Run'}
                    {!isRunning && <Play className='size-4' />}
                </Button>
            </div>
        </section>
    )
}

export default SecondaryHeader
