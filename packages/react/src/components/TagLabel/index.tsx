import React, { ReactNode } from 'react'

import {
  TagLabel as ChakraTagLabel,
  TagLabelProps as ChakraTagLabelProps,
} from '@chakra-ui/react'

export interface TagLabelProps extends ChakraTagLabelProps {
  children: ReactNode
}

export function TagLabel({ children, ...props }: TagLabelProps) {
  return <ChakraTagLabel {...props}>{children}</ChakraTagLabel>
}

TagLabel.displayName = 'TagLabel'
