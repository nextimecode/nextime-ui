import React, { ReactNode } from 'react'

import {
  NumberInput as ChakraNumberInput,
  NumberInputProps as ChakraNumberInputProps,
} from '@chakra-ui/react'

export interface NumberInputProps extends ChakraNumberInputProps {
  children: ReactNode
}

export function NumberInput({ children, ...props }: NumberInputProps) {
  return <ChakraNumberInput {...props}>{children}</ChakraNumberInput>
}

NumberInput.displayName = 'NumberInput'
