import React, { ReactNode } from 'react'

import {
  RangeSlider as ChakraRangeSlider,
  RangeSliderProps as ChakraRangeSliderProps
} from '@chakra-ui/react'

export interface RangeSliderProps extends ChakraRangeSliderProps {
  children: ReactNode
}

export function RangeSlider({ children, ...props }: RangeSliderProps) {
  return <ChakraRangeSlider {...props}>{children}</ChakraRangeSlider>
}

RangeSlider.displayName = 'RangeSlider'
