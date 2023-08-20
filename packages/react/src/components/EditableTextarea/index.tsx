import React, { ReactNode } from 'react'

import {
  EditableTextarea as ChakraEditableTextarea,
  EditableTextareaProps as ChakraEditableTextareaProps
} from '@chakra-ui/react'

export interface EditableTextareaProps extends ChakraEditableTextareaProps {
  children: ReactNode
}

export function EditableTextarea({
  children,
  ...props
}: EditableTextareaProps) {
  return <ChakraEditableTextarea {...props}>{children}</ChakraEditableTextarea>
}

EditableTextarea.displayName = 'EditableTextarea'
