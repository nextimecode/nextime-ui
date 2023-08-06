import React, { ReactNode } from 'react'

import {
  Alert as ChakraAlert,
  AlertProps as ChakraAlertProps,
} from '@chakra-ui/react'

export interface AlertProps extends ChakraAlertProps {
  children: ReactNode
}

export function Alert({ children, ...props }: AlertProps) {
  return <ChakraAlert {...props}>{children}</ChakraAlert>
}

Alert.displayName = 'Alert'
