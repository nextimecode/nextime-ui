import React, { ReactNode } from 'react'

import { Kbd as ChakraKbd, KbdProps as ChakraKbdProps } from '@chakra-ui/react'

export interface KbdProps extends ChakraKbdProps {
  children: ReactNode
}

export function Kbd({ children, ...props }: KbdProps) {
  return <ChakraKbd {...props}>{children}</ChakraKbd>
}

Kbd.displayName = 'Kbd'
