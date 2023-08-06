import React, { ReactNode } from 'react'

import {
  CircularProgress as ChakraCircularProgress,
  CircularProgressProps as ChakraCircularProgressProps,
} from '@chakra-ui/react'

export interface CircularProgressProps extends ChakraCircularProgressProps {
  children: ReactNode
}

export function CircularProgress({
  children,
  ...props
}: CircularProgressProps) {
  return <ChakraCircularProgress {...props}>{children}</ChakraCircularProgress>
}

CircularProgress.displayName = 'CircularProgress'
