import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMailBulk,
  FaYoutube,
  FaFacebookMessenger
} from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Text
} from '@chakra-ui/react'

export type NextFooterProps = {
  bg: string
}

export const NextFooter = ({ bg }: NextFooterProps) => {
  return (
    <footer>
      <Box bg={bg} zIndex={'docked'}>
        <Container maxW={'6xl'}>
          <Flex gap={20} pt={12} pb={12}>
            <Box flex="1">
              <Heading fontWeight={600} color="white">
                Fale com a gente:
              </Heading>
              <HStack spacing={6} pt={4} pb={10}>
                <Link
                  href={
                    'mailto:nextimeclub@gmail.com?subject=Vi o site&body=Olá,%20NeXTCLUBS'
                  }
                  target={'_blank'}
                  aria-label="Envie um email para a gente"
                >
                  <Icon
                    color="white"
                    _hover={{ color: 'next-secondary' }}
                    as={FaMailBulk}
                    w={16}
                    h={16}
                  />
                </Link>
                <Link href={'#'} target={'_blank'} aria-label="Nosso whatsapp">
                  <Icon
                    color="white"
                    _hover={{ color: 'next-secondary' }}
                    as={FaWhatsapp}
                    w={16}
                    h={16}
                  />
                </Link>
                <Link
                  href={'https://m.me/102621504903865'}
                  target={'_blank'}
                  aria-label="Entre em contato pelo facebook"
                >
                  <Icon
                    color="white"
                    _hover={{ color: 'next-secondary' }}
                    as={FaFacebookMessenger}
                    w={16}
                    h={16}
                  />
                </Link>
                <Link
                  href={'https://www.instagram.com/nextimetec/'}
                  target={'_blank'}
                  aria-label="Veja nosso instagram"
                >
                  <Icon
                    color="white"
                    _hover={{ color: 'next-secondary' }}
                    as={FaInstagram}
                    w={16}
                    h={16}
                  />
                </Link>
              </HStack>
              <HStack spacing={6} pt={3} pb={12}>
                <Link
                  href={'https://www.nextime.com.br/'}
                  aria-label="Empresa NeXTIME"
                >
                  <Box pe={6} pt={2}>
                    <Text fontSize="sm" color={'white'}>
                      from
                    </Text>
                    <Image
                      src="/images/logos/nextime_logo_white.svg"
                      alt="NeXTIME Logo"
                      width={146}
                      height={46}
                    />
                  </Box>
                </Link>
                <Link
                  href={'https://www.linkedin.com/company/nextimetec/'}
                  target={'_blank'}
                  aria-label="Acesse nosso LinkedIn"
                >
                  <Icon
                    color="white"
                    _hover={{ color: 'next-secondary' }}
                    as={FaLinkedinIn}
                    w={8}
                    h={8}
                  />
                </Link>
                <Link
                  href={
                    'https://www.youtube.com/channel/UC1hFKnbaZ2dvmdYSDbRgVsA'
                  }
                  target={'_blank'}
                  aria-label="Acesse nosso youtube"
                >
                  <Icon
                    color="white"
                    _hover={{ color: 'next-secondary' }}
                    as={FaYoutube}
                    w={8}
                    h={8}
                  />
                </Link>
              </HStack>
            </Box>
            <Box display={['none', 'block']}>
              <Image
                src="/images/logos/logo_500.png"
                alt="NeXTIME Logo"
                width={300}
                height={300}
              />
            </Box>
            <Box display={['none', 'block']}>
              <Image
                src="/images/logos/logo_footer.svg"
                alt="NeXTIME Logo"
                width={300}
                height={300}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </footer>
  )
}
