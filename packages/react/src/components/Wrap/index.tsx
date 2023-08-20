import React, { ReactNode } from 'react'

import {
  Wrap as ChakraWrap,
  WrapProps as ChakraWrapProps
} from '@chakra-ui/react'

export interface WrapProps extends ChakraWrapProps {
  children: ReactNode
}

export function Wrap({ children, ...props }: WrapProps) {
  return <ChakraWrap {...props}>{children}</ChakraWrap>
}

Wrap.displayName = 'Wrap'
