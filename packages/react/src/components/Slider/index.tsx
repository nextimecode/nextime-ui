import React, { ReactNode } from 'react'

import {
  Slider as ChakraSlider,
  SliderProps as ChakraSliderProps
} from '@chakra-ui/react'

export interface SliderProps extends ChakraSliderProps {
  children: ReactNode
}

export function Slider({ children, ...props }: SliderProps) {
  return <ChakraSlider {...props}>{children}</ChakraSlider>
}

Slider.displayName = 'Slider'
