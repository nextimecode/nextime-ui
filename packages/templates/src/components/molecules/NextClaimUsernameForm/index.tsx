import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { EditIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  useToast
} from '@chakra-ui/react'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useAuth } from '@/contexts/AuthContext'
import { CallApi } from '@/lib/CallApi'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras' })
    .transform(username => username.toLowerCase())
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function NextClaimUsernameForm() {
  const { user } = useAuth()
  const [buttonColor, setButtonColor] = useState<string>('gray')
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(false)
  const toast = useToast()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema)
  })

  async function handleClaimUsername({ username }: ClaimUsernameFormData) {
    if (user && username !== user.username) {
      CallApi({ toast, method: 'PUT', url: '/users', data: { username }, user })
    }
    setButtonColor('gray')
  }

  async function handleChangeUsername(username: string) {
    if (user) {
      if (username !== user.username || user.username === user.uid) {
        setButtonColor('green')
        setIsDisabledButton(false)
      } else {
        setButtonColor('gray')
        setIsDisabledButton(true)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(handleClaimUsername)}>
      <FormControl isInvalid={!!errors.username}>
        <FormLabel htmlFor="username">Nome de usuário</FormLabel>
        <InputGroup size="sm">
          <InputLeftAddon>https://club.nextime.com.br/</InputLeftAddon>
          <Input
            type="name"
            placeholder="seu-usuario"
            {...register('username')}
            defaultValue={user?.username || user?.uid || ''}
            onChange={event => {
              setValue('username', event.target.value)
              handleChangeUsername(event.target.value)
            }}
          />
        </InputGroup>
        {!errors.username ? (
          <FormHelperText>Digite o nome do usuário desejado</FormHelperText>
        ) : (
          <FormErrorMessage>{errors.username.message}</FormErrorMessage>
        )}
        <Button
          isDisabled={isDisabledButton}
          mt={4}
          type="submit"
          width={'100%'}
          colorScheme={buttonColor}
        >
          <Flex gap={2}>
            <EditIcon />{' '}
            {user && user.username
              ? 'Salvar nome de usuário'
              : 'Mudar nome de usuário'}
          </Flex>
        </Button>
      </FormControl>
    </form>
  )
}
