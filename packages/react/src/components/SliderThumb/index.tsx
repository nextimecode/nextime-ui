import React, { ReactNode } from 'react'

import {
  SliderThumb as ChakraSliderThumb,
  SliderThumbProps as ChakraSliderThumbProps,
} from '@chakra-ui/react'

export interface SliderThumbProps extends ChakraSliderThumbProps {
  children: ReactNode
}

export function SliderThumb({ children, ...props }: SliderThumbProps) {
  return <ChakraSliderThumb {...props}>{children}</ChakraSliderThumb>
}

SliderThumb.displayName = 'SliderThumb'
