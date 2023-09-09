import Image from 'next/image'
import Link from 'next/link'

import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'

export interface NextCallToActionProps {
  color?: string
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  height: number
  id?: string
  image: string
  isLoading?: boolean
  text: string
  textButton?: string
  title: string
  url: string
  width: number
  priority?: boolean
}

export const NextCallToAction = ({
  id,
  color,
  title,
  text,
  image,
  url,
  width,
  height,
  textButton = '< Faça um orçamento />',
  directionMd = 'row',
  directionBase = 'column',
  priority = false
}: NextCallToActionProps) => {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      direction={{ base: directionBase, md: directionMd }}
      id={id}
      bg={color}
      py={{ base: 5, md: 12 }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Stack spacing={6} w={'full'}>
          <Heading as={'h2'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            {title}
          </Heading>
          <Box display={{ base: 'block', md: 'none' }}>
            <Image
              style={{ borderRadius: '25px' }}
              alt={title}
              src={image}
              width={width}
              height={height}
              priority={priority}
            />
          </Box>
          <Text fontSize={{ base: 'md', lg: 'lg' }} whiteSpace={'pre-wrap'}>
            {text}
          </Text>
          <Box display={{ base: 'none', md: 'block' }}>
            <Link href={url}>
              <Button
                width={'full'}
                fontWeight={'bold'}
                color="next-dark"
                bg={'next-primary'}
                _hover={{
                  bg: 'next-tertiary'
                }}
              >
                {textButton}
              </Button>
            </Link>
          </Box>
        </Stack>
      </Stack>
      <Box width={'100%'} display={{ base: 'block', md: 'none' }}>
        <Link href={url}>
          <Button
            width={'full'}
            fontWeight={'bold'}
            color="next-dark"
            bg={'next-primary'}
            _hover={{
              bg: 'next-tertiary'
            }}
          >
            {textButton}
          </Button>
        </Link>
      </Box>
      <Box display={{ base: 'none', md: 'block' }}>
        <Flex
          maxW={'500px'}
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Image
            style={{ borderRadius: '25px' }}
            alt={title}
            src={image}
            width={width}
            height={height}
          />
        </Flex>
      </Box>
    </Stack>
  )
}
