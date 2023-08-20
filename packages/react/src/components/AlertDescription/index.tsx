import React, { ReactNode } from 'react'

import {
  AlertDescription as ChakraAlertDescription,
  AlertDescriptionProps as ChakraAlertDescriptionProps
} from '@chakra-ui/react'

export interface AlertDescriptionProps extends ChakraAlertDescriptionProps {
  children: ReactNode
}

export function AlertDescription({
  children,
  ...props
}: AlertDescriptionProps) {
  return <ChakraAlertDescription {...props}>{children}</ChakraAlertDescription>
}

AlertDescription.displayName = 'AlertDescription'
