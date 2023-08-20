import React, { ReactNode } from 'react'

import {
  TagCloseButton as ChakraTagCloseButton,
  TagCloseButtonProps as ChakraTagCloseButtonProps
} from '@chakra-ui/react'

export interface TagCloseButtonProps extends ChakraTagCloseButtonProps {
  children: ReactNode
}

export function TagCloseButton({ children, ...props }: TagCloseButtonProps) {
  return <ChakraTagCloseButton {...props}>{children}</ChakraTagCloseButton>
}

TagCloseButton.displayName = 'TagCloseButton'
