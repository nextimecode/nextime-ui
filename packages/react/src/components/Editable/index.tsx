import React, { ReactNode } from 'react'

import {
  Editable as ChakraEditable,
  EditableProps as ChakraEditableProps,
} from '@chakra-ui/react'

export interface EditableProps extends ChakraEditableProps {
  children: ReactNode
}

export function Editable({ children, ...props }: EditableProps) {
  return <ChakraEditable {...props}>{children}</ChakraEditable>
}

Editable.displayName = 'Editable'
