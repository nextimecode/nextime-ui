import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Box, Flex } from '@chakra-ui/react'

import { User, Fire, ClipboardText, Heart } from '@phosphor-icons/react'

import { Colors } from '../../../theme/colors'

export const NextMobileMenu = () => {
  const pathname = usePathname()
  const linkColor: Colors = 'next-quaternary'
  const activeColor = 'white'
  return (
    <Box
      bgColor="next-primary"
      zIndex={'docked'}
      bottom="0px"
      position="fixed"
      w="100%"
    >
      <Flex alignItems={'center'} justifyContent={'space-around'} my={1}>
        <Link href="/discover">
          <Flex
            p={1}
            flexDirection="column"
            alignItems={'center'}
            color={pathname === '/discover' ? activeColor : linkColor}
          >
            <Fire size={32} />
          </Flex>
        </Link>
        <Link href="/matches">
          <Flex
            p={1}
            flexDirection="column"
            alignItems={'center'}
            color={pathname === '/matches' ? activeColor : linkColor}
          >
            <Heart size={32} />
          </Flex>
        </Link>
        <Link href="/preferences">
          <Flex
            p={1}
            flexDirection="column"
            alignItems={'center'}
            color={pathname === '/preferences' ? activeColor : linkColor}
          >
            <ClipboardText size={32} />
          </Flex>
        </Link>
        <Link href="/profile">
          <Flex
            p={1}
            flexDirection="column"
            alignItems={'center'}
            color={pathname === '/profile' ? activeColor : linkColor}
          >
            <User size={32} />
          </Flex>
        </Link>
      </Flex>
    </Box>
  )
}
