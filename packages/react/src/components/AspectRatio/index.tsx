import React, { ReactNode } from 'react'

import {
  AspectRatio as ChakraAspectRatio,
  AspectRatioProps as ChakraAspectRatioProps,
} from '@chakra-ui/react'

export interface AspectRatioProps extends ChakraAspectRatioProps {
  children: ReactNode
}

export function AspectRatio({ children, ...props }: AspectRatioProps) {
  return <ChakraAspectRatio {...props}>{children}</ChakraAspectRatio>
}

AspectRatio.displayName = 'AspectRatio'
