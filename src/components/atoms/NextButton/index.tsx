import React, { HTMLAttributes, ReactNode } from 'react';

export interface NextButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'primary' | 'secondary'
}

export const NextButton = ({children, variant, ...props}: NextButtonProps) => {
  return (
    <button 
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray'
      }}
    > 
      {children}
    </button> 
  )
}