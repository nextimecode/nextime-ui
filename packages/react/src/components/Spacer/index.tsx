import React, { ReactNode } from 'react'

import {
  Spacer as ChakraSpacer,
  SpacerProps as ChakraSpacerProps
} from '@chakra-ui/react'

export interface SpacerProps extends ChakraSpacerProps {
  children: ReactNode
}

export function Spacer({ children, ...props }: SpacerProps) {
  return <ChakraSpacer {...props}>{children}</ChakraSpacer>
}

Spacer.displayName = 'Spacer'
