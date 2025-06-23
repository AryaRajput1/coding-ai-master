import React, { ReactNode } from 'react'

const Button = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <button className={`border-binge-900 text-binge-900 border py-1 px-2 rounded-md hover:bg-binge-900 hover:text-primary-900 cursor-pointer font-semibold ${className} flex gap-1 items-center`} >
            {children}
        </button>
    )
}

export default Button
