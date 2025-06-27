import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page =async () => {
  return (
    <div className='w-screen text-white gap-4 flex flex-col h-[80vh] justify-center items-center'>
      <div className='flex justify-center relative'>
              <Image src={'/image.png'} width={400} height={400} alt='Logo' aria-hidden/>
              <div className='absolute z-10 left-[50%] top-[30%] translate-x-[-50%] font-extrabold text-binge-900'>Coding Master AI</div>
      </div>
      <h1 className='text-3xl pt-10 text-center'><span className='font-bold text-5xl text-binge-900'>Want to Improve?</span> </h1>
      <p className='text-center'>It wont only give you suggestions. <span className='font-bold text-binge-900'>It will impove you.</span> It helps you write better, faster, and cleaner code while improving your coding skills.</p>
      <Link href={'/home'} className='border text-binge-900 px-4 py-2 rounded-md hover:bg-binge-900 hover:text-primary-900 font-bold'>Try Now!</Link>
    </div>
  )
}

export default page
