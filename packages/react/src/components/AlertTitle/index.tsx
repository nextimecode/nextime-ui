import React, { ReactNode } from 'react'

import {
  AlertTitle as ChakraAlertTitle,
  AlertTitleProps as ChakraAlertTitleProps
} from '@chakra-ui/react'

export interface AlertTitleProps extends ChakraAlertTitleProps {
  children: ReactNode
}

export function AlertTitle({ children, ...props }: AlertTitleProps) {
  return <ChakraAlertTitle {...props}>{children}</ChakraAlertTitle>
}

AlertTitle.displayName = 'AlertTitle'
