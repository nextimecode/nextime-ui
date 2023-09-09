/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  // useToast,
  List,
  ListItem,
  ListIcon,
  Button,
  Center
} from '@chakra-ui/react'

import { Gift } from '@phosphor-icons/react'

import { Product } from '../../../app/subscription/page'
// import api from '../../../lib/api'
// import { translateErrorCode } from '../../../lib/translateErrorCode'

function PriceWrapper({ product }: { product: Product }) {
  const {
    imageUrl,
    name,
    price,
    isMostPopular,
    metadata,
    description
    // defaultPriceId
  } = product
  const featuresList = Object.values(metadata)
  const buttonVariant = isMostPopular ? 'solid' : 'outline'
  const bgTextColorMostPopular = useColorModeValue(
    'next-green.400',
    'next-green.200'
  )
  const textColorMostPopular = useColorModeValue('black', 'black')
  // const toast = useToast()
  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
  //   useState(false)
  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true)
  //     const response = await api.post('checkout', {
  //       priceId: defaultPriceId
  //     })
  //     const { checkoutUrl } = response.data
  //     window.location.href = checkoutUrl
  //   } catch (error) {
  //     setIsCreatingCheckoutSession(false)
  //     toast({
  //       title: 'Ops! Encontramos um obstáculo.',
  //       description: translateErrorCode((error as Error).message),
  //       status: 'error',
  //       duration: 9000,
  //       isClosable: true
  //     })
  //   }
  // }
  const bgColor = useColorModeValue('next-blue.400', 'next-blue.200')
  return (
    <Box
      bg={bgColor}
      mb={4}
      shadow="base"
      minWidth={'328px'}
      maxWidth={'328px'}
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'2xl'}
    >
      <Box position="relative">
        {isMostPopular && (
          <Box
            position="absolute"
            top="-16px"
            left="50%"
            style={{ transform: 'translate(-50%)' }}
          >
            <Text
              textTransform="uppercase"
              bg={bgTextColorMostPopular}
              px={3}
              py={1}
              color={textColorMostPopular}
              fontSize="sm"
              fontWeight="600"
              rounded="xl"
            >
              Mais Vendido
            </Text>
          </Box>
        )}
        <Box py={4} px={12}>
          <Center pt={1} pb={2}>
            <Image width={48} height={48} alt="NeXTIME Logo" src={imageUrl} />
          </Center>
          <Text fontWeight="500" fontSize="2xl">
            {name}
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="5xl" fontWeight="900">
              {price}
            </Text>
            <Text fontSize="3xl" color="next-dark">
              /mês
            </Text>
          </HStack>
        </Box>
        <VStack
          bg={useColorModeValue('gray.50', 'gray.700')}
          py={4}
          borderBottomRadius={'xl'}
        >
          <List spacing={3} textAlign="start" px={12}>
            {featuresList.map(feature => (
              <ListItem key={feature}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {feature}
              </ListItem>
            ))}
          </List>
          <Center px={6} py={3}>
            <Text fontSize="sm">{description}</Text>
          </Center>
          <Box w="80%">
            <Link href="invite">
              <Button
                w="full"
                colorScheme="green"
                variant={buttonVariant}
                display={'flex'}
                gap={2}
              >
                <Gift size={32} weight="fill" /> Indique e ganhe
              </Button>
            </Link>
          </Box>
          {/* <Box w="80%">
            <Button
              w="full"
              isLoading={isCreatingCheckoutSession}
              colorScheme="red"
              variant={buttonVariant}
              onClick={handleBuyProduct}
            >
              Iniciar teste grátis
            </Button>
          </Box> */}
        </VStack>
      </Box>
    </Box>
  )
}

interface NextThreeTierPricingProps {
  products: Product[]
}

export function NextThreeTierPricing({ products }: NextThreeTierPricingProps) {
  const heading =
    products.length > 1
      ? 'Planos que se encaixam na sua necessidade'
      : 'Plano que se encaixa na sua necessidade'
  return (
    <Box>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          {heading}
        </Heading>
        <Text fontSize="lg" color={'gray.500'} p={1}>
          Comece com um teste gratuito de 07 dias. Cancele a qualquer momento.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {products.map(product => {
          return <PriceWrapper key={product.id} product={product} />
        })}
      </Stack>
    </Box>
  )
}
