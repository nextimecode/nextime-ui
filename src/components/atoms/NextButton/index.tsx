import React, { HTMLAttributes, ReactNode } from 'react';

export interface NextButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** O que é children vem aqui */
  children: ReactNode

  /** Variant é a cor */
  variant: 'primary' | 'secondary'
}

/** Texto Sobre o Button */
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