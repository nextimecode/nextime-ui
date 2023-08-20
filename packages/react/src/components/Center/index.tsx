import React, { ReactNode } from 'react'

import {
  Center as ChakraCenter,
  CenterProps as ChakraCenterProps
} from '@chakra-ui/react'

export interface CenterProps extends ChakraCenterProps {
  children: ReactNode
}

export function Center({ children, ...props }: CenterProps) {
  return <ChakraCenter {...props}>{children}</ChakraCenter>
}

Center.displayName = 'Center'
