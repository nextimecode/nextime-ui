import React, { ReactNode } from 'react'

import {
  TableCaption as ChakraTableCaption,
  TableCaptionProps as ChakraTableCaptionProps
} from '@chakra-ui/react'

export interface TableCaptionProps extends ChakraTableCaptionProps {
  children: ReactNode
}

export function TableCaption({ children, ...props }: TableCaptionProps) {
  return <ChakraTableCaption {...props}>{children}</ChakraTableCaption>
}

TableCaption.displayName = 'TableCaption'
