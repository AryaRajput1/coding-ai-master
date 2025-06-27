import React, { ReactNode, PropsWithChildren } from 'react'

type ButtonPropsTypes = PropsWithChildren<{ children: ReactNode, className?: string }>

const Button = ({ children, className, ...props }: ButtonPropsTypes) => {
    return (
        <button className={`border-binge-900 text-binge-900 border py-1 px-2 rounded-md hover:bg-binge-900 hover:text-primary-900 cursor-pointer font-semibold ${className} flex gap-1 items-center`} {...props} >
            {children}
        </button>
    )
}

export default Button
