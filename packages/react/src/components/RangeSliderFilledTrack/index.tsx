import React, { ReactNode } from 'react'

import {
  RangeSliderFilledTrack as ChakraRangeSliderFilledTrack,
  RangeSliderTrackProps as ChakraRangeSliderTrackProps,
} from '@chakra-ui/react'

export interface RangeSliderTrackProps extends ChakraRangeSliderTrackProps {
  children: ReactNode
}

export function RangeSliderFilledTrack({
  children,
  ...props
}: RangeSliderTrackProps) {
  return (
    <ChakraRangeSliderFilledTrack {...props}>
      {children}
    </ChakraRangeSliderFilledTrack>
  )
}

RangeSliderFilledTrack.displayName = 'RangeSliderFilledTrack'
