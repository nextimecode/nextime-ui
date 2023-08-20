import React, { ReactNode } from 'react'

import {
  RangeSliderFilledTrack as ChakraRangeSliderFilledTrack,
  RangeSliderInnerTrackProps as ChakraRangeSliderInnerTrackProps
} from '@chakra-ui/react'

export interface RangeSliderInnerTrackProps
  extends ChakraRangeSliderInnerTrackProps {
  children: ReactNode
}

export function RangeSliderFilledTrack({
  children,
  ...props
}: RangeSliderInnerTrackProps) {
  return (
    <ChakraRangeSliderFilledTrack {...props}>
      {children}
    </ChakraRangeSliderFilledTrack>
  )
}

RangeSliderFilledTrack.displayName = 'RangeSliderFilledTrack'
