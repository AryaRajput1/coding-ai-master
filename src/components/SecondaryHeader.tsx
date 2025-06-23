import React from 'react'
import { Play } from 'lucide-react';
import Button from './Button'

const SecondaryHeader = () => {
    return (
        <section className='h-16 bg-primary-50 flex justify-end items-center px-4'>
            <div>
                <Button className='px-0'>
                    Run <Play className='size-4' />
                </Button>
            </div>
        </section>
    )
}

export default SecondaryHeader
