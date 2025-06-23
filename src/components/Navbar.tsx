import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <header className='w-full bg-primary-50 h-16'>
            <nav className='max-w-6xl mx-auto flex justify-between items-center h-full text-binge-900'>
                <h1 className='font-bold text-xl'>CodingMasterAI</h1>
                <ul className='flex items-center'>
                    <li className='px-4 py-1 m-4 border-r-2 hover:bg-primary-800'><Link href={'/'}>Home</Link></li>
                    <li className='flex items-center'>
                        <SignedOut>
                            <SignInButton>
                                <Button>
                                    Sign In
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
