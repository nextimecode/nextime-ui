import React, { ReactNode } from 'react'

import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps
} from '@chakra-ui/react'

export interface IconButtonProps extends ChakraIconButtonProps {
  children: ReactNode
}

export function IconButton({ children, ...props }: IconButtonProps) {
  return <ChakraIconButton {...props}>{children}</ChakraIconButton>
}

IconButton.displayName = 'IconButton'
