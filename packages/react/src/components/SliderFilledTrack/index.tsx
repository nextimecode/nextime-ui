import React, { ReactNode } from 'react'

import {
  SliderFilledTrack as ChakraSliderFilledTrack,
  SliderTrackProps as ChakraSliderTrackProps,
} from '@chakra-ui/react'

export interface SliderTrackProps extends ChakraSliderTrackProps {
  children: ReactNode
}

export function SliderFilledTrack({ children, ...props }: SliderTrackProps) {
  return (
    <ChakraSliderFilledTrack {...props}>{children}</ChakraSliderFilledTrack>
  )
}

SliderFilledTrack.displayName = 'SliderFilledTrack'
