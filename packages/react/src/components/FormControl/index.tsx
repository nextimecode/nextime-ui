import React, { ReactNode } from 'react'

import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps
} from '@chakra-ui/react'

export interface FormControlProps extends ChakraFormControlProps {
  children: ReactNode
}

export function FormControl({ children, ...props }: FormControlProps) {
  return <ChakraFormControl {...props}>{children}</ChakraFormControl>
}

FormControl.displayName = 'FormControl'
