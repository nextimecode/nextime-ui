import Image from 'next/image'
import Link from 'next/link'

import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'

import { NextButton } from '../../atoms/NextButton'

export type NextHeroProps = {
  id?: string
  words?: string
  title: string
  text: string
  image?: string
  textButton: string
  bg?: string
  url: string
  width?: number
  height?: number
  alt?: string
}

export const NextHero = ({
  id,
  words,
  title,
  text,
  textButton,
  bg,
  url,
  image = '/images/home/image_0.png',
  width = 1024,
  height = 1024,
  alt = 'Imagem Hero'
}: NextHeroProps) => {
  return (
    <header>
      <Container id={id} bg={bg} maxW="container.lg">
        <Stack
          minH={'70vh'}
          align={'center'}
          direction={{ base: 'column', md: 'row-reverse' }}
        >
          <Flex flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              {words && (
                <Text
                  pt={4}
                  color={'next-gray'}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  {words}
                </Text>
              )}
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color={'white'} as={'span'}>
                  {title}
                </Text>
              </Heading>
              <Text
                fontSize={{ base: 'md', lg: 'lg' }}
                color={'white'}
                whiteSpace={'pre-wrap'}
              >
                {text}
              </Text>
              <Stack
                display={{ base: 'none', md: 'block' }}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
              >
                <Link href={url}>
                  <NextButton>{textButton}</NextButton>
                </Link>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={alt}
              src={image}
              width={width}
              height={height}
              priority
            />
          </Flex>
          <Box display={{ base: 'block', md: 'none' }} pt={6} pb={12}>
            <Link href={url}>
              <NextButton>{textButton}</NextButton>
            </Link>
          </Box>
        </Stack>
      </Container>
    </header>
  )
}
