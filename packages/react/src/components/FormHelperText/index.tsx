import React, { ReactNode } from 'react'

import {
  FormHelperText as ChakraFormHelperText,
  FormHelperTextProps as ChakraFormHelperTextProps,
} from '@chakra-ui/react'

export interface FormHelperTextProps extends ChakraFormHelperTextProps {
  children: ReactNode
}

export function FormHelperText({ children, ...props }: FormHelperTextProps) {
  return <ChakraFormHelperText {...props}>{children}</ChakraFormHelperText>
}

FormHelperText.displayName = 'FormHelperText'
