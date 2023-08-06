import React, { ReactNode } from 'react'

import {
  Skeleton as ChakraSkeleton,
  SkeletonProps as ChakraSkeletonProps,
} from '@chakra-ui/react'

export interface SkeletonProps extends ChakraSkeletonProps {
  children: ReactNode
}

export function Skeleton({ children, ...props }: SkeletonProps) {
  return <ChakraSkeleton {...props}>{children}</ChakraSkeleton>
}

Skeleton.displayName = 'Skeleton'
