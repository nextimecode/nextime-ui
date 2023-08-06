import React, { ReactNode } from 'react'

import {
  Divider as ChakraDivider,
  DividerProps as ChakraDividerProps,
} from '@chakra-ui/react'

export interface DividerProps extends ChakraDividerProps {
  children: ReactNode
}

export function Divider({ children, ...props }: DividerProps) {
  return <ChakraDivider {...props}>{children}</ChakraDivider>
}

Divider.displayName = 'Divider'
