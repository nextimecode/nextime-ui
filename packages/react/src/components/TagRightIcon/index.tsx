import React, { ReactNode } from 'react'

import {
  TagRightIcon as ChakraTagRightIcon,
  IconProps as ChakraIconProps
} from '@chakra-ui/react'

export interface IconProps extends ChakraIconProps {
  children: ReactNode
}

export function TagRightIcon({ children, ...props }: IconProps) {
  return <ChakraTagRightIcon {...props}>{children}</ChakraTagRightIcon>
}

TagRightIcon.displayName = 'TagRightIcon'
