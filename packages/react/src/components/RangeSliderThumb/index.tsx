import React, { ReactNode } from 'react'

import {
  RangeSliderThumb as ChakraRangeSliderThumb,
  RangeSliderThumbProps as ChakraRangeSliderThumbProps,
} from '@chakra-ui/react'

export interface RangeSliderThumbProps extends ChakraRangeSliderThumbProps {
  children: ReactNode
}

export function RangeSliderThumb({
  children,
  ...props
}: RangeSliderThumbProps) {
  return <ChakraRangeSliderThumb {...props}>{children}</ChakraRangeSliderThumb>
}

RangeSliderThumb.displayName = 'RangeSliderThumb'
