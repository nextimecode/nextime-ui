import React, { ReactNode } from 'react'

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

export interface InputProps extends ChakraInputProps {
  children: ReactNode
}

export function Input({ children, ...props }: InputProps) {
  return <ChakraInput {...props}>{children}</ChakraInput>
}

Input.displayName = 'Input'
