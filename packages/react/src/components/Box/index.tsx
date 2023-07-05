import React, { ReactNode } from 'react'
import { Box as ChakraBox,  BoxProps as ChakraBoxProps} from "@chakra-ui/react";

export interface BoxProps extends ChakraBoxProps {
  children: ReactNode;
}

export function Box({ children, ...props }: BoxProps) {
  return (
    <ChakraBox {...props}>
      {children}
    </ChakraBox>
  )
}

Box.displayName = 'Box'
