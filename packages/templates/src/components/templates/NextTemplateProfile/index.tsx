import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { CheckCircleIcon, WarningTwoIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Text,
  useToast
} from '@chakra-ui/react'

import { Gear, Pencil, SealCheck, ShareNetwork } from '@phosphor-icons/react'

import { colors } from '@/theme/colors'

import { useAuth } from '../../../contexts/AuthContext'
import { items } from '../../../data'
import { translateErrorCode } from '../../../lib/translateErrorCode'
import { NextLayout } from '../NextLayout'

export function NextTemplateProfile() {
  const { user, emailVerification } = useAuth()
  const toast = useToast()
  const router = useRouter()

  if (!user) {
    return <NextLayout />
  }

  async function handleEmailVerification(email: string) {
    try {
      await emailVerification()
      toast({
        title: `Email de verificaçao enviado para ${email}.`,
        description: 'Verifique também a caixa de spam.',
        status: 'success',
        duration: 12000,
        isClosable: true
      })
    } catch (error) {
      toast({
        title: 'Tivemos um problema ao enviar o email de verificação.',
        description: translateErrorCode((error as Error).message),
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  return (
    <NextLayout>
      <Container maxW="container.lg" pb={60}>
        <Box my={4}>
          <Text fontWeight={'bold'}>@{user.username}</Text>
        </Box>
        <Avatar mb={4} src={user.photos[0]} size="xl" />
        <Flex direction={'column'} gap={2} pb={4}>
          <Flex gap={2} alignItems={'center'}>
            <Text fontSize={'xl'}>{user.firstName}</Text>
            {user.isProfileVerified && (
              <SealCheck
                color={colors['next-secondary']}
                size={32}
                weight="fill"
              />
            )}
          </Flex>
          {user.republica && (
            <Flex gap={2}>
              <Text fontWeight={'bold'}>República:</Text>
              <Text>{user.republica}</Text>
            </Flex>
          )}
          <Box maxW={['100%', '50%']}>
            <Text>{user.bio}</Text>
          </Box>
        </Flex>
        <Flex direction={'column'} gap={2}>
          {!user.isProfileVerified && (
            <Button
              width={'100%'}
              colorScheme="orange"
              onClick={() => router.push('profile/selfie')}
            >
              <Flex gap={2}>
                <WarningTwoIcon /> Verificar perfil
              </Flex>
            </Button>
          )}
          {!user.emailVerified && (
            <Button
              width={'100%'}
              colorScheme="orange"
              onClick={() => handleEmailVerification(String(user.email))}
            >
              <Flex gap={2}>
                <WarningTwoIcon /> Verificar email
              </Flex>
            </Button>
          )}
          {user.emailVerified && (
            <Text colorScheme="gray">
              Seu email {user?.email} está verificado{' '}
              <CheckCircleIcon color="green" />
            </Text>
          )}
          {user.isProfileVerified && (
            <Text colorScheme="gray">
              seu perfil está verificado <CheckCircleIcon color="green" />
            </Text>
          )}
          <Link href={'/profile/edit'}>
            <Button width={'100%'} colorScheme={'gray'}>
              <Flex gap={2}>
                <Pencil /> Editar perfil
              </Flex>
            </Button>
          </Link>
          <Link
            href={`https://wa.me/?text=${items.layout.url}/${user.username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button width={'100%'} colorScheme={'gray'}>
              <Flex gap={2}>
                <ShareNetwork /> Compartilhar perfil
              </Flex>
            </Button>
          </Link>
          <Box>
            <Link href={'/profile/settings'}>
              <Button width={'100%'} colorScheme={'gray'}>
                <Flex gap={2}>
                  <Gear /> Configurações
                </Flex>
              </Button>
            </Link>
          </Box>
        </Flex>
        <Box pt={2} my={4}>
          <SimpleGrid columns={[1, 3]} spacing={2} pt={2}>
            {user.photos.map((photo, index) => (
              <Box key={index}>
                {photo && (
                  <Image
                    alt={`${user.username} ${index}`}
                    src={photo}
                    style={{ width: '100%', height: 'auto' }}
                    width="0"
                    height="0"
                    sizes="100vw"
                  />
                )}
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </NextLayout>
  )
}
