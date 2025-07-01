import React from 'react'
import Button from './Button'
import { useCodeStore } from '@/store/codeStore'

const TheFooter = () => {
    const { panel, changePanel } = useCodeStore()
    return (
        <footer className='bg-primary-900 gap-2 items-center px-2 py-1 sticky bottom-0 left-0 right-0 md:hidden flex'>
            <Button onClick={changePanel}>{panel === 'code' ? 'Preview' : 'Code'}</Button>
        </footer>
    )
}

export default TheFooter
