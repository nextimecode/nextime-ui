import React, { ReactNode } from 'react'

import {
  ListIcon as ChakraListIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react'

export interface IconProps extends ChakraIconProps {
  children: ReactNode
}

export function ListIcon({ children, ...props }: IconProps) {
  return <ChakraListIcon {...props}>{children}</ChakraListIcon>
}

ListIcon.displayName = 'ListIcon'
