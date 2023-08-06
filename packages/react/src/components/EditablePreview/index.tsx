import React, { ReactNode } from 'react'

import {
  EditablePreview as ChakraEditablePreview,
  EditablePreviewProps as ChakraEditablePreviewProps,
} from '@chakra-ui/react'

export interface EditablePreviewProps extends ChakraEditablePreviewProps {
  children: ReactNode
}

export function EditablePreview({ children, ...props }: EditablePreviewProps) {
  return <ChakraEditablePreview {...props}>{children}</ChakraEditablePreview>
}

EditablePreview.displayName = 'EditablePreview'
