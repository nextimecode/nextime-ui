import React, { ReactNode } from 'react'

import {
  NumberInputField as ChakraNumberInputField,
  NumberInputFieldProps as ChakraNumberInputFieldProps,
} from '@chakra-ui/react'

export interface NumberInputFieldProps extends ChakraNumberInputFieldProps {
  children: ReactNode
}

export function NumberInputField({
  children,
  ...props
}: NumberInputFieldProps) {
  return <ChakraNumberInputField {...props}>{children}</ChakraNumberInputField>
}

NumberInputField.displayName = 'NumberInputField'
