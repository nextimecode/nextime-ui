import React, { ReactNode } from 'react'

import {
  RangeSliderTrack as ChakraRangeSliderTrack,
  RangeSliderTrackProps as ChakraRangeSliderTrackProps,
} from '@chakra-ui/react'

export interface RangeSliderTrackProps extends ChakraRangeSliderTrackProps {
  children: ReactNode
}

export function RangeSliderTrack({
  children,
  ...props
}: RangeSliderTrackProps) {
  return <ChakraRangeSliderTrack {...props}>{children}</ChakraRangeSliderTrack>
}

RangeSliderTrack.displayName = 'RangeSliderTrack'
