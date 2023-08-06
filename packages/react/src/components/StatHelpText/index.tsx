import React, { ReactNode } from 'react'

import {
  StatHelpText as ChakraStatHelpText,
  StatHelpTextProps as ChakraStatHelpTextProps,
} from '@chakra-ui/react'

export interface StatHelpTextProps extends ChakraStatHelpTextProps {
  children: ReactNode
}

export function StatHelpText({ children, ...props }: StatHelpTextProps) {
  return <ChakraStatHelpText {...props}>{children}</ChakraStatHelpText>
}

StatHelpText.displayName = 'StatHelpText'
