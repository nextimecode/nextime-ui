import React, { ReactNode } from 'react'

import {
  EditableInput as ChakraEditableInput,
  EditableInputProps as ChakraEditableInputProps
} from '@chakra-ui/react'

export interface EditableInputProps extends ChakraEditableInputProps {
  children: ReactNode
}

export function EditableInput({ children, ...props }: EditableInputProps) {
  return <ChakraEditableInput {...props}>{children}</ChakraEditableInput>
}

EditableInput.displayName = 'EditableInput'
