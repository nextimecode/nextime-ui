import React, { ReactNode } from 'react'

import {
  FormErrorMessage as ChakraFormErrorMessage,
  FormErrorMessageProps as ChakraFormErrorMessageProps
} from '@chakra-ui/react'

export interface FormErrorMessageProps extends ChakraFormErrorMessageProps {
  children: ReactNode
}

export function FormErrorMessage({
  children,
  ...props
}: FormErrorMessageProps) {
  return <ChakraFormErrorMessage {...props}>{children}</ChakraFormErrorMessage>
}

FormErrorMessage.displayName = 'FormErrorMessage'
