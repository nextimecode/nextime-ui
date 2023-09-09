/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import TinderCard from 'react-tinder-card'

import { useRouter } from 'next/navigation'

import { CloseIcon, StarIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Flex,
  Text,
  Badge,
  useToast,
  Avatar,
  Center
} from '@chakra-ui/react'

import { Meta } from '../../../@types/Meta'
import { useAuth } from '../../../contexts/AuthContext'
import { Preference, preferences } from '../../../data/preferences'
import api from '../../../lib/api'
import { CallApi } from '../../../lib/CallApi'
import { colors } from '../../../theme/colors'

export default function NextPreferencesCards() {
  const { user } = useAuth()
  const router = useRouter()
  const [userPreferences, setUserPreferences] = useState<Preference[]>([])
  const toast = useToast()
  const [meta, setMeta] = useState<Meta>({ totalCount: undefined })
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentIndexRef = useRef(currentIndex)
  const [rightButtonPressed, setRightButtonPressed] = useState(false)
  const [leftButtonPressed, setLeftButtonPressed] = useState(false)

  const childRefs: any = useMemo(
    () =>
      Array(preferences?.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  )

  const updateCurrentIndex = (val: any) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canSwipe = currentIndex >= 0

  const fetchUsers = useCallback(async () => {
    if (user) {
      const response = await api.get('users/preferences', {
        headers: {
          Authorization: user?.accessToken
        }
      })
      setUserPreferences(response.data.preferences)
      setMeta(response.data.meta)
    }
  }, [user])

  useEffect(() => {
    setCurrentIndex(userPreferences.length - 1)
    if (userPreferences.length === 0) {
      fetchUsers()
    }
  }, [fetchUsers, userPreferences.length, user])

  if (meta.totalCount === 0) {
    toast({
      title: 'Preferências atualizadas!',
      description:
        'Você completou todas as preferências disponíveis. Continue verificando para descobrir novas opções adicionadas no futuro!',
      status: 'info',
      duration: 9000,
      isClosable: true
    })
    router.push('/discover')
  }

  async function handleSendLikeOrDislike(
    preference: Preference,
    direction: string
  ) {
    const apiUrl = direction === 'right' ? 'interest' : 'disinterest'
    CallApi({
      method: 'PUT',
      url: apiUrl,
      data: { preference },
      user
    })
  }

  const swiped = (direction: string, preference: Preference, index: number) => {
    updateCurrentIndex(index - 1)
    handleSendLikeOrDislike(preference, direction)
  }

  const outOfFrame = async (idx: any) => {
    userPreferences.splice(idx, 1)
    updateCurrentIndex(idx - 1)
    setUserPreferences([...userPreferences])
    if (meta.totalCount === 0) {
      router.push('/matches')
    }
  }

  const swipe = useCallback(
    async (dir: string) => {
      if (childRefs && canSwipe && currentIndex < userPreferences.length) {
        await childRefs[currentIndex].current.swipe(dir)
        setRightButtonPressed(false)
        setLeftButtonPressed(false)
      }
    },
    [canSwipe, childRefs, currentIndex, userPreferences.length]
  )

  const handleArrowKeys = useCallback(
    async (event: { key: string }) => {
      if (event.key === 'ArrowLeft') {
        setLeftButtonPressed(true)
        await swipe('left')
      } else if (event.key === 'ArrowRight') {
        setRightButtonPressed(true)
        await swipe('right')
      }
    },
    [swipe]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleArrowKeys)

    return () => {
      window.removeEventListener('keydown', handleArrowKeys)
    }
  }, [handleArrowKeys])

  return (
    <Flex justifyContent={'center'}>
      <Box
        width="100%"
        maxW={['100%', '360px']}
        height="100vh"
        borderRadius="2xl"
        overflowY="hidden"
        overflowX="hidden"
      >
        <Flex position="relative">
          {userPreferences?.map((preference, index) => (
            <Box position="absolute" key={preference.id} cursor={'pointer'}>
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                preventSwipe={['up', 'down']}
                onSwipe={dir => swiped(dir, preference, index)}
                onCardLeftScreen={() => outOfFrame(index)}
              >
                <Box
                  bg={`linear-gradient(180deg, ${colors['next-primary']}, ${colors['next-quaternary']})`}
                  width="90vw"
                  maxW={['100%', '360px']}
                  height="59vh"
                  borderRadius="2xl"
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Badge
                    top={0}
                    fontSize={'xl'}
                    borderTopRadius="20px"
                    bg={'next-secondary'}
                    color={'black'}
                    width={'100%'}
                    textAlign={'center'}
                  >
                    {preferences.length -
                      Number(meta.interestsAndDisinterestsCount) >
                    12
                      ? preferences.length -
                        Number(meta.interestsAndDisinterestsCount) +
                        index -
                        11
                      : preferences.length -
                        Number(meta.interestsAndDisinterestsCount) +
                        index}
                  </Badge>
                  <Center flexDirection={'column'} mt={4} px={6}>
                    <Text
                      textAlign={'center'}
                      fontSize={'lg'}
                      color={'white'}
                      pt={1}
                    >
                      {preference.category}
                    </Text>
                    <Text textAlign={'center'} fontSize={'4xl'}>
                      {preference.emoji}
                    </Text>
                    <Text
                      textAlign={'center'}
                      fontSize={'2xl'}
                      fontWeight={700}
                      color={'white'}
                      wordBreak={'break-word'}
                    >
                      {preference.name}
                    </Text>
                  </Center>
                  <Box
                    position="fixed"
                    bottom={0}
                    textAlign={'center'}
                    mb={2}
                    width={'100%'}
                  >
                    <Avatar
                      textAlign={'center'}
                      src={'/images/lis.png'}
                      size="lg"
                    />
                    <Text
                      textAlign={'center'}
                      fontSize={'md'}
                      fontWeight={700}
                      color={'white'}
                    >
                      Aprimorando meus conhecimentos
                    </Text>
                  </Box>
                </Box>
              </TinderCard>
            </Box>
          ))}
        </Flex>
        <Flex justifyContent={'center'}>
          <Flex mb={[16, 20]} gap={12} position="fixed" bottom={0}>
            <IconButton
              colorScheme="red"
              aria-label="Call Segun"
              height="3.625rem"
              width="3.625rem"
              fontSize={'xl'}
              borderRadius={'full'}
              icon={<CloseIcon />}
              onClick={() => {
                swipe('left')
                setLeftButtonPressed(true)
              }}
              isDisabled={leftButtonPressed}
            />
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              height="3.625rem"
              width="3.625rem"
              fontSize={'xl'}
              borderRadius={'full'}
              icon={<StarIcon />}
              onClick={() => {
                swipe('right')
                setRightButtonPressed(true)
              }}
              isDisabled={rightButtonPressed}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
