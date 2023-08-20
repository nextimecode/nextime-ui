import React, { ReactNode } from 'react'

import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps
} from '@chakra-ui/react'

export interface TextareaProps extends ChakraTextareaProps {
  children: ReactNode
}

export function Textarea({ children, ...props }: TextareaProps) {
  return <ChakraTextarea {...props}>{children}</ChakraTextarea>
}

Textarea.displayName = 'Textarea'
