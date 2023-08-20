import React, { ReactNode } from 'react'

import {
  SkeletonCircle as ChakraSkeletonCircle,
  SkeletonProps as ChakraSkeletonProps
} from '@chakra-ui/react'

export interface SkeletonProps extends ChakraSkeletonProps {
  children: ReactNode
}

export function SkeletonCircle({ children, ...props }: SkeletonProps) {
  return <ChakraSkeletonCircle {...props}>{children}</ChakraSkeletonCircle>
}

SkeletonCircle.displayName = 'SkeletonCircle'
