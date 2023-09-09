import { FieldError } from 'react-hook-form'
import { BsExclamationCircle } from 'react-icons/bs'

import { Text, HStack, Icon } from '@chakra-ui/react'

type Props = {
  message: string | FieldError | null
}

export const NextFormErrorText = ({ message }: Props) => {
  if (message !== null) {
    const displayMessage =
      typeof message === 'string' ? message : message.message

    return (
      <>
        <HStack py={1} w="100%" justifyContent="space-between">
          <Text fontWeight="medium" fontSize="xs" color="danger">
            {displayMessage}
          </Text>
          <Icon as={BsExclamationCircle} w={4} h={4} data-testid="error-icon" />
        </HStack>
      </>
    )
  }
  return <></>
}
