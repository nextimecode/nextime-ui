import React, { ReactNode } from 'react'

import {
  PinInput as ChakraPinInput,
  PinInputProps as ChakraPinInputProps
} from '@chakra-ui/react'

export interface PinInputProps extends ChakraPinInputProps {
  children: ReactNode
}

export function PinInput({ children, ...props }: PinInputProps) {
  return <ChakraPinInput {...props}>{children}</ChakraPinInput>
}

PinInput.displayName = 'PinInput'
