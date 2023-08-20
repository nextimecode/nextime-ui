import React, { ReactNode } from 'react'

import {
  CardBody as ChakraCardBody,
  CardBodyProps as ChakraCardBodyProps
} from '@chakra-ui/react'

export interface CardBodyProps extends ChakraCardBodyProps {
  children: ReactNode
}

export function CardBody({ children, ...props }: CardBodyProps) {
  return <ChakraCardBody {...props}>{children}</ChakraCardBody>
}

CardBody.displayName = 'CardBody'
