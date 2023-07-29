import { Button as ChakraButton,  ButtonProps as ChakraButtonProps} from "@chakra-ui/react";
import React, { ReactNode } from 'react'


export interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <ChakraButton {...props}>
      {children}
    </ChakraButton>
  )
}

Button.displayName = 'Button'
