import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Container,
  Button,
  useToast,
  useColorModeValue,
  HStack,
  Collapse,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'

import { Gear, Gift, Keyhole } from '@phosphor-icons/react'

import { NavItem } from '../../../@types/LandingPageItems'
import { useAuth } from '../../../contexts/AuthContext'
import { translateErrorCode } from '../../../lib/translateErrorCode'
import { Colors } from '../../../theme/colors'
import { NextLogo } from '../../atoms/NextLogo'

export type Props = {
  isLogged?: boolean
  navItems?: Array<NavItem>
  logoSrc?: string
  logoWidth?: number
  logoHeight?: number
  logoAlt?: string
  logoSubtitle?: string
  logoSubtitleColor?: string
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'gray.900' }}
    >
      <Link href={href}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </Box>
  )
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Blog',
    href: '/blog'
  }
]

const DesktopNav = ({ navItems = NAV_ITEMS }: Props) => {
  const pathname = usePathname()
  const linkColor = useColorModeValue('black', 'white')
  const linkHoverColor = 'next-primary'
  const popoverContentBgColor = 'gray.800'

  return (
    <Stack direction={'row'} spacing={4}>
      {navItems.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link href={navItem.href ?? '#'}>
                <Button
                  variant={'ghost'}
                  p={2}
                  fontSize={'md'}
                  fontWeight={500}
                  color={pathname === navItem.href ? linkHoverColor : linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor
                  }}
                >
                  {navItem.label}
                </Button>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'flex-start'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text
          color="gray.800"
          fontWeight={600}
          _hover={{ color: 'next-blue.400' }}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.700'}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const MobileNav = ({ navItems = NAV_ITEMS }: Props) => {
  return (
    <Stack bg={'gray.300'} p={4} display={{ md: 'none' }}>
      {navItems.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const NAV_ITEMS_LOGGED: Array<NavItem> = [
  {
    label: 'Descobrir',
    href: '/discover'
  },
  {
    label: 'Matches',
    href: '/matches'
  },
  {
    label: 'Preferências',
    href: '/preferences'
  },
  {
    label: 'Indique',
    href: '/invite'
  },
  {
    label: 'Perfil',
    href: '/profile'
  }
]

export const NextHeader = ({
  logoSrc = '/images/logos/logo.svg',
  logoWidth = 50,
  logoHeight = 50,
  logoAlt = 'NeXTIME Logo',
  logoSubtitle,
  logoSubtitleColor
}: Props) => {
  const pathname = usePathname()
  const router = useRouter()
  const toast = useToast()
  const { isOpen, onToggle } = useDisclosure()
  const { user, logout } = useAuth()
  const navItems = user ? NAV_ITEMS_LOGGED : NAV_ITEMS
  const iconColor = useColorModeValue('black', 'next-primary')
  const linkColor = useColorModeValue('black', 'white')
  const activeColor: Colors = 'next-primary'
  async function handleLogout() {
    try {
      await logout()
    } catch (error) {
      toast({
        title: 'Ops! Encontramos um obstáculo.',
        description: translateErrorCode((error as Error).message),
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  async function handleSubmit() {
    if (user && !(pathname === '/') && !pathname?.includes('blog')) {
      handleLogout()
    } else {
      await router.push('/login')
    }
  }

  return (
    <Box borderBottom={1} borderStyle={'solid'} borderColor={'next-primary'}>
      <Container maxW="container.lg">
        <Flex minH={'50px'} align={'center'}>
          <Flex justify={{ base: 'center' }} alignItems={'center'}>
            {logoSrc === '/images/logos/logo.svg' && (
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                priority
              />
            )}
            {logoSrc === '/images/logos/next.svg' && (
              <NextLogo colorPrimary={'primary'} color={'primary'} />
            )}
            {logoSubtitle && (
              <Flex
                gap={1}
                ms={2}
                display={['none', 'flex']}
                alignItems={'end'}
              >
                <Text
                  as={'h2'}
                  color={logoSubtitleColor}
                  fontSize={{ base: 'md', lg: 'xl' }}
                >
                  {logoSubtitle}
                </Text>
                <Text as={'span'}>beta</Text>
              </Flex>
            )}
          </Flex>
          {!user && (
            <Flex display={{ base: 'flex', md: 'none' }} me={2}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
                color={iconColor}
              />
            </Flex>
          )}
          <HStack
            flex={{ base: 1 }}
            gap={1}
            justify={{ base: 'end' }}
            alignItems={'center'}
          >
            <Flex display={{ base: 'none', sm: 'flex' }} me={4}>
              <DesktopNav navItems={navItems} />
            </Flex>
            {user && (
              <Box display={{ base: 'flex', sm: 'none' }} gap={4}>
                <Link href="/invite">
                  <Flex
                    p={1}
                    flexDirection="column"
                    alignItems={'center'}
                    color={pathname === '/invite' ? activeColor : linkColor}
                  >
                    <Gift size={32} />
                  </Flex>
                </Link>
                <Link href="/profile/settings">
                  <Flex
                    p={1}
                    flexDirection="column"
                    alignItems={'center'}
                    color={
                      pathname === '/profile/settings' ? activeColor : linkColor
                    }
                  >
                    <Gear size={32} />
                  </Flex>
                </Link>
              </Box>
            )}
            {!user && (
              <Button
                variant={'ghost'}
                fontSize={'md'}
                _hover={{
                  bg: 'next-primary'
                }}
                aria-label="Fazer login na plataforma"
                onClick={() => handleSubmit()}
              >
                <Keyhole size={24} />
                <Text display={['none', 'block']} ms={1}>
                  ENTRAR
                </Text>
              </Button>
            )}
            {!user && (
              <Link href="/signup">
                <Button
                  variant="outline"
                  borderColor={'next-primary'}
                  fontSize={'md'}
                  _hover={{
                    bg: 'next-primary'
                  }}
                >
                  CRIAR CONTA
                </Button>
              </Link>
            )}
          </HStack>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav navItems={navItems} />
        </Collapse>
      </Container>
    </Box>
  )
}
