import React, { ReactNode } from 'react'

import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps
} from '@chakra-ui/react'

export interface ContainerProps extends ChakraContainerProps {
  children: ReactNode
}

export function Container({ children, ...props }: ContainerProps) {
  return <ChakraContainer {...props}>{children}</ChakraContainer>
}

Container.displayName = 'Container'
