import React, { ReactNode } from 'react'

import {
  SliderTrack as ChakraSliderTrack,
  SliderTrackProps as ChakraSliderTrackProps
} from '@chakra-ui/react'

export interface SliderTrackProps extends ChakraSliderTrackProps {
  children: ReactNode
}

export function SliderTrack({ children, ...props }: SliderTrackProps) {
  return <ChakraSliderTrack {...props}>{children}</ChakraSliderTrack>
}

SliderTrack.displayName = 'SliderTrack'
