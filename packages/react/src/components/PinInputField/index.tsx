import React, { ReactNode } from 'react'

import {
  PinInputField as ChakraPinInputField,
  PinInputFieldProps as ChakraPinInputFieldProps
} from '@chakra-ui/react'

export interface PinInputFieldProps extends ChakraPinInputFieldProps {
  children: ReactNode
}

export function PinInputField({ children, ...props }: PinInputFieldProps) {
  return <ChakraPinInputField {...props}>{children}</ChakraPinInputField>
}

PinInputField.displayName = 'PinInputField'
