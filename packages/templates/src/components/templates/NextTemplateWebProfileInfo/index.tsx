import { useCallback, useEffect, useState } from 'react'

import Image from 'next/image'

import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  Tooltip,
  useDisclosure
} from '@chakra-ui/react'

import { SealCheck } from '@phosphor-icons/react'

import { SimilarityData } from '@/@types/SimilarityData'
import { colors } from '@/theme/colors'

import { WebProfileInfo } from '../../../@types/User'
import { useAuth } from '../../../contexts/AuthContext'
import { CallApi } from '../../../lib/CallApi'
import { isUserOnline } from '../../../lib/isUserOnline'
import { NextLayout } from '../NextLayout'

interface NextTemplateProfileProps {
  webProfileInfo?: WebProfileInfo | null
}

export function NextTemplateWebProfileInfo({
  webProfileInfo
}: NextTemplateProfileProps) {
  const { user } = useAuth()
  const [testInfo, setTestInfo] = useState<SimilarityData>({
    value: 0,
    commonInterested: [],
    commonDisinterested: [],
    totalCombinations: 0
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOnline, setIsOnline] = useState<boolean | undefined>(false)
  const isCurrentUser = user?.uid === webProfileInfo?.uid

  const fetchProfileInfo = useCallback(async () => {
    if (!webProfileInfo) return
    const { data } = await CallApi({
      method: 'POST',
      data: { otherUserUid: webProfileInfo.uid },
      url: 'similarity',
      user
    })
    setTestInfo(data)
    const userOnlineCheck = isUserOnline(webProfileInfo.metadata.lastDiscoverAt)
    setIsOnline(userOnlineCheck)
  }, [user, webProfileInfo])

  useEffect(() => {
    fetchProfileInfo()
  }, [fetchProfileInfo])

  return (
    <NextLayout title={webProfileInfo ? user?.firstName : ''}>
      {webProfileInfo && (
        <Container maxW="container.lg" pt={4} pb={60}>
          <Box mb={4}>
            <Text fontWeight={'bold'}>@{webProfileInfo?.username}</Text>
          </Box>
          <Flex gap={1} pt={6}>
            <Avatar mb={4} src={webProfileInfo?.photos[0]} size="xl">
              <AvatarBadge
                boxSize="2rem"
                bg={isOnline ? 'green.500' : 'gray'}
              />
            </Avatar>
            {!isCurrentUser && testInfo && testInfo.value > 0 && (
              <Flex direction={'column'} gap={2}>
                <Tooltip
                  placement="top"
                  isOpen={!isOpen}
                  hasArrow
                  label="Clique e saiba mais"
                  bg="next-primary"
                  color={'white'}
                >
                  <Button
                    width={8}
                    p={8}
                    fontSize={'lg'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'blue.500'
                    }}
                    _focus={{
                      bg: 'blue.500'
                    }}
                    onClick={onOpen}
                  >
                    {`${testInfo.value}%`}
                  </Button>
                </Tooltip>
              </Flex>
            )}
          </Flex>
          <Flex direction={'column'} gap={2}>
            <Flex gap={2} alignItems={'center'}>
              <Text fontSize={'xl'}>{webProfileInfo.firstName}</Text>
              {webProfileInfo.isProfileVerified && (
                <SealCheck
                  color={colors['next-secondary']}
                  size={32}
                  weight="fill"
                />
              )}
            </Flex>
            {webProfileInfo.republica && (
              <Flex gap={2}>
                <Text fontWeight={'bold'}>República:</Text>
                <Text>{webProfileInfo.republica}</Text>
              </Flex>
            )}
            <Box maxW={['100%', '50%']}>
              <Text>{webProfileInfo?.bio}</Text>
            </Box>
          </Flex>
          <Box pt={4} my={4}>
            <SimpleGrid columns={[1, 3]} spacing={2} pt={2}>
              {webProfileInfo?.photos.map((photo, index) => (
                <Box key={index}>
                  {photo && (
                    <Image
                      alt={`${webProfileInfo.username} ${index}`}
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
      )}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Total de comparações realizadas: {testInfo.totalCombinations}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize={'md'} fontWeight="bold">
              Items de interesses em comum:
            </Text>
            {testInfo.commonInterested.map(interested => (
              <Box key={interested.id}>
                <Text fontSize="xs">{interested.name}</Text>
              </Box>
            ))}
            <Text fontSize={'md'} fontWeight="bold" pt={4}>
              Items de desinteresse em comum:
            </Text>
            {testInfo.commonDisinterested.map(disinterested => (
              <Box key={disinterested.id}>
                <Text fontSize="xs">{disinterested.name}</Text>
              </Box>
            ))}
            <Text pt={4} fontSize={'xs'}>
              Utilizando o GPT-4, nossa plataforma vai além de meras comparações
              de respostas. Dessa forma melhoramos a precisão na identificação
              de similaridades e diferenças entre os usuários. Respondendo a
              todas as perguntas do questionário, você permite uma análise mais
              personalizada e precisa, já que o GPT-4 utiliza estas informações
              para traçar os pontos de similaridade mais relevantes.
            </Text>
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3}>
              Ver teste completo
            </Button> */}
            <Button onClick={onClose}>Voltar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </NextLayout>
  )
}
