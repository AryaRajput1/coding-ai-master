import Panel from '@/components/Panel'
import { RedirectToSignIn } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const HomePage = async () => {
  const { userId, redirectToSignIn } = await auth()
  if(!userId){
    return redirectToSignIn()
  }
  return (
    <div className='w-full'>
      <Panel />
    </div>
  )
}

export default HomePage
