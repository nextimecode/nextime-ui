/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
'use client'
import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import TinderCard from 'react-tinder-card'

import { useRouter } from 'next/navigation'

import { CloseIcon, StarIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Flex,
  Text,
  Container,
  Button,
  useToast
} from '@chakra-ui/react'

import { SealCheck } from '@phosphor-icons/react'

import { User } from '../../../@types/User'
import { useAuth } from '../../../contexts/AuthContext'
import api from '../../../lib/api'
import { isUserOnline } from '../../../lib/isUserOnline'
import { colors } from '../../../theme/colors'

type Props = {
  items: User[]
}

export default function NextDatingCards({ items }: Props) {
  const { user } = useAuth()
  const toast = useToast()
  const router = useRouter()
  const [people, setPeople] = useState(items)
  const [currentIndex, setCurrentIndex] = useState(items.length - 1)
  const currentIndexRef = useRef(currentIndex)
  const [rightButtonPressed, setRightButtonPressed] = useState(false)
  const [leftButtonPressed, setLeftButtonPressed] = useState(false)
  const [perfilButtonPressed, setPerfilButtonPressed] = useState(false)

  const childRefs: any = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map(() => React.createRef()),
    [people.length]
  )

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canSwipe = currentIndex >= 0

  async function handleSendLikeOrDislike(
    likedUserUid: string,
    direction: string
  ) {
    const apiUrl = direction === 'right' ? 'like' : 'dislike'
    const newUser = {
      likedUserUid
    }
    if (user) {
      const response = await api.put(apiUrl, newUser, {
        headers: {
          Authorization: user.accessToken
        }
      })
      if (response.data.match) {
        toast({
          title: 'Match!',
          description: `🎉 Parabéns! Vocês se curtiram! Agora é se encontrar no Rock dos
                Solteiros`,
          status: 'success',
          duration: 9000,
          isClosable: true
        })
      }
    }
  }
  const swiped = (direction: string, character: User, index: number) => {
    updateCurrentIndex(index - 1)
    handleSendLikeOrDislike(character.uid, direction)
  }

  const outOfFrame = async (idx: number) => {
    people.splice(idx, 1)
    updateCurrentIndex(idx - 1)
    setPeople([...people])
    if (people.length === 0) {
      await router.push('/discover')
    }
  }

  const swipe = useCallback(
    async (dir: string) => {
      if (canSwipe && currentIndex < people.length) {
        await childRefs[currentIndex].current.swipe(dir)
        setRightButtonPressed(false)
        setLeftButtonPressed(false)
      }
    },
    [canSwipe, childRefs, currentIndex, people.length]
  )

  const handleArrowKeys = useCallback(
    async (event: { key: string }) => {
      if (event.key === 'ArrowLeft') {
        setLeftButtonPressed(true)
        swipe('left')
      } else if (event.key === 'ArrowRight') {
        setRightButtonPressed(true)
        swipe('right')
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
    <Container display={'flex'} justifyContent={'center'}>
      <Box width="100%" maxW={['100%', '360px']} mb={20} height="100vh">
        <Flex position="relative" height="100vh">
          {people.map((character, index) => (
            <Box width={'100%'} position="absolute" key={character.uid} mb={20}>
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                preventSwipe={['up', 'down']}
                onSwipe={dir => swiped(dir, character, index)}
                onCardLeftScreen={() => outOfFrame(index)}
                key={character.uid}
              >
                <Box
                  backgroundImage={`linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${character.photos[0]})`}
                  position="relative"
                  width="100%"
                  minW="100%"
                  height="calc(100vh - 280px)"
                  borderRadius="2xl"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  tabIndex={0}
                  onKeyDown={event => handleArrowKeys(event)}
                >
                  <Box m={3} bottom={0}>
                    <Flex alignItems={'center'} gap={2}>
                      <Text fontSize={'3xl'} fontWeight={700} color={'white'}>
                        {character.firstName}
                      </Text>
                      {character.isProfileVerified && (
                        <SealCheck
                          color={colors['next-secondary']}
                          size={32}
                          weight="fill"
                        />
                      )}
                    </Flex>
                    {isUserOnline(character.metadata.lastDiscoverAt) && (
                      <Box
                        display={'flex'}
                        gap={1}
                        alignItems={'center'}
                        fontSize={'md'}
                        color={'white'}
                      >
                        <Box
                          w="12px"
                          h="12px"
                          borderRadius="50%"
                          backgroundColor={'green.500'}
                        />
                        Online agora
                      </Box>
                    )}
                  </Box>
                </Box>
              </TinderCard>
              {character.username && (
                <Box mt={'-20'}>
                  <Button
                    size={'md'}
                    width={'100%'}
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => {
                      setPerfilButtonPressed(true)
                      router.push(`/${character.uid}`)
                    }}
                    isLoading={perfilButtonPressed}
                  >
                    🔍 Veja perfil
                  </Button>
                </Box>
              )}
            </Box>
          ))}
        </Flex>
        <Flex justifyContent={'center'}>
          <Flex mb={[16, 20]} gap={12} position="fixed" bottom={0}>
            <IconButton
              colorScheme="red"
              aria-label="Call Segun"
              size="lg"
              height="58px"
              width="58px"
              fontSize={'21px'}
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
              size="lg"
              height="58px"
              width="58px"
              fontSize={'21px'}
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
    </Container>
  )
}
