"use client";

import { useCodeStore } from '@/store/codeStore'
import React from 'react'
import Loader from './Loader';


const PreviewPanel = () => {
    const { result, error, isRunning } = useCodeStore()
    const isError = !!error

    if (isRunning) {
        return <pre>
            <span className='animate-pulse'>
                <Loader label="Code Running..."/>
            </span>
        </pre>
    }

    if (isError) {
        return (
            <pre className={` text-red-500`}>
                {error}
            </pre>
        )
    }

    return (
        <pre>
            {result || 'No Output'}
        </pre>
    )
}

export default PreviewPanel
