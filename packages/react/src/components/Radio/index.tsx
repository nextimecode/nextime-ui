import React, { ReactNode } from 'react'

import {
  Radio as ChakraRadio,
  RadioProps as ChakraRadioProps
} from '@chakra-ui/react'

export interface RadioProps extends ChakraRadioProps {
  children: ReactNode
}

export function Radio({ children, ...props }: RadioProps) {
  return <ChakraRadio {...props}>{children}</ChakraRadio>
}

Radio.displayName = 'Radio'
