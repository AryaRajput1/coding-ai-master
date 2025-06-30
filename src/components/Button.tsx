import React, { MouseEventHandler, ReactNode } from 'react'

type ButtonPropsTypes = { children: ReactNode, className?: string, onClick?: MouseEventHandler<HTMLButtonElement> }

const Button = ({ children, className, onClick }: ButtonPropsTypes) => {
    return (
        <button className={`border-binge-900 text-binge-900 border py-1 px-2 rounded-md hover:bg-binge-900 hover:text-primary-900 cursor-pointer font-semibold ${className} flex gap-1 items-center`} onClick={onClick} >
            {children}
        </button>
    )
}

export default Button
