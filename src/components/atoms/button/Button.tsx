import React, { HTMLAttributes, ReactNode } from "react";

export interface PropsInt extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    variant: 'primary' | 'secondary'
}
export const Button:React.FC<PropsInt> = ({children,variant='primary', ...props}: PropsInt)=> {
    return (
        <button {...props} style={{backgroundColor: variant === 'primary' ? 'blue' : 'gray'}}>
            {children}
        </button>
    )
}