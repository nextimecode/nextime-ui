import React, { ReactNode } from 'react'

import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps
} from '@chakra-ui/react'

export interface FormLabelProps extends ChakraFormLabelProps {
  children: ReactNode
}

export function FormLabel({ children, ...props }: FormLabelProps) {
  return <ChakraFormLabel {...props}>{children}</ChakraFormLabel>
}

FormLabel.displayName = 'FormLabel'
