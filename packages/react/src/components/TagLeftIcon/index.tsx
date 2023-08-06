import React, { ReactNode } from 'react'

import {
  TagLeftIcon as ChakraTagLeftIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react'

export interface IconProps extends ChakraIconProps {
  children: ReactNode
}

export function TagLeftIcon({ children, ...props }: IconProps) {
  return <ChakraTagLeftIcon {...props}>{children}</ChakraTagLeftIcon>
}

TagLeftIcon.displayName = 'TagLeftIcon'
