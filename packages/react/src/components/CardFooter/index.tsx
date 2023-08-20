import React, { ReactNode } from 'react'

import {
  CardFooter as ChakraCardFooter,
  CardFooterProps as ChakraCardFooterProps
} from '@chakra-ui/react'

export interface CardFooterProps extends ChakraCardFooterProps {
  children: ReactNode
}

export function CardFooter({ children, ...props }: CardFooterProps) {
  return <ChakraCardFooter {...props}>{children}</ChakraCardFooter>
}

CardFooter.displayName = 'CardFooter'
