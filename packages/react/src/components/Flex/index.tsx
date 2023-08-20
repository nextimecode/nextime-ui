import React, { ReactNode } from 'react'

import {
  Flex as ChakraFlex,
  FlexProps as ChakraFlexProps
} from '@chakra-ui/react'

export interface FlexProps extends ChakraFlexProps {
  children: ReactNode
}

export function Flex({ children, ...props }: FlexProps) {
  return <ChakraFlex {...props}>{children}</ChakraFlex>
}

Flex.displayName = 'Flex'
