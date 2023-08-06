import React, { ReactNode } from 'react'

import {
  WrapItem as ChakraWrapItem,
  WrapItemProps as ChakraWrapItemProps,
} from '@chakra-ui/react'

export interface WrapItemProps extends ChakraWrapItemProps {
  children: ReactNode
}

export function WrapItem({ children, ...props }: WrapItemProps) {
  return <ChakraWrapItem {...props}>{children}</ChakraWrapItem>
}

WrapItem.displayName = 'WrapItem'
