import React, { ReactNode } from 'react'

import {
  Circle as ChakraCircle,
  SquareProps as ChakraCircleProps,
} from '@chakra-ui/react'

export interface CircleProps extends ChakraCircleProps {
  children: ReactNode
}

export function Circle({ children, ...props }: CircleProps) {
  return <ChakraCircle {...props}>{children}</ChakraCircle>
}

Circle.displayName = 'Circle'
