import React, { ReactNode } from 'react'

import {
  CircularProgressLabel as ChakraCircularProgressLabel,
  CircularProgressLabelProps as ChakraCircularProgressLabelProps
} from '@chakra-ui/react'

export interface CircularProgressLabelProps
  extends ChakraCircularProgressLabelProps {
  children: ReactNode
}

export function CircularProgressLabel({
  children,
  ...props
}: CircularProgressLabelProps) {
  return (
    <ChakraCircularProgressLabel {...props}>
      {children}
    </ChakraCircularProgressLabel>
  )
}

CircularProgressLabel.displayName = 'CircularProgressLabel'
