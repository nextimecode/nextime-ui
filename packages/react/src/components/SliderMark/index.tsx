import React, { ReactNode } from 'react'

import {
  SliderMark as ChakraSliderMark,
  SliderMarkProps as ChakraSliderMarkProps,
} from '@chakra-ui/react'

export interface SliderMarkProps extends ChakraSliderMarkProps {
  children: ReactNode
}

export function SliderMark({ children, ...props }: SliderMarkProps) {
  return <ChakraSliderMark {...props}>{children}</ChakraSliderMark>
}

SliderMark.displayName = 'SliderMark'
