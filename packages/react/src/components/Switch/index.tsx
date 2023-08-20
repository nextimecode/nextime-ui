import React, { ReactNode } from 'react'

import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps
} from '@chakra-ui/react'

export interface SwitchProps extends ChakraSwitchProps {
  children: ReactNode
}

export function Switch({ children, ...props }: SwitchProps) {
  return <ChakraSwitch {...props}>{children}</ChakraSwitch>
}

Switch.displayName = 'Switch'
