import React, { ReactNode } from 'react'

import {
  SkeletonText as ChakraSkeletonText,
  SkeletonTextProps as ChakraSkeletonTextProps
} from '@chakra-ui/react'

export interface SkeletonTextProps extends ChakraSkeletonTextProps {
  children: ReactNode
}

export function SkeletonText({ children, ...props }: SkeletonTextProps) {
  return <ChakraSkeletonText {...props}>{children}</ChakraSkeletonText>
}

SkeletonText.displayName = 'SkeletonText'
