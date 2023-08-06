import React, { ReactNode } from 'react'

import {
  AlertIcon as ChakraAlertIcon,
  AlertIconProps as ChakraAlertIconProps,
} from '@chakra-ui/react'

export interface AlertIconProps extends ChakraAlertIconProps {
  children: ReactNode
}

export function AlertIcon({ children, ...props }: AlertIconProps) {
  return <ChakraAlertIcon {...props}>{children}</ChakraAlertIcon>
}

AlertIcon.displayName = 'AlertIcon'
