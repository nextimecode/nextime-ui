import React, { ReactNode } from 'react'
import { Square as ChakraSquare,  SquareProps as ChakraSquareProps} from "@chakra-ui/react";

export interface SquareProps extends ChakraSquareProps {
  children: ReactNode;
}

export function Square({ children, ...props }: SquareProps) {
  return (
    <ChakraSquare {...props}>
      {children}
    </ChakraSquare>
  )
}

Square.displayName = 'Square'
