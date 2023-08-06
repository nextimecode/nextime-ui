import React, { ReactNode } from 'react'

import { Tag as ChakraTag, TagProps as ChakraTagProps } from '@chakra-ui/react'

export interface TagProps extends ChakraTagProps {
  children: ReactNode
}

export function Tag({ children, ...props }: TagProps) {
  return <ChakraTag {...props}>{children}</ChakraTag>
}

Tag.displayName = 'Tag'
