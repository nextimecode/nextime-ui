import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

export const NextInterMenu = () => {
  const pathname = usePathname()
  const linkColor = useColorModeValue('gray.700', 'gray.200')
  const activeColor = 'next-primary'
  return (
    <Box>
      <Flex alignItems={'center'} justifyContent={'space-around'}>
        <Box>
          <Link href="/profile/edit">
            <Flex
              m={2}
              flexDirection="column"
              alignItems={'center'}
              color={pathname === '/profile/edit' ? activeColor : linkColor}
            >
              Editar
            </Flex>
          </Link>
        </Box>
        {/* <Link href="/profile/view">
          <Flex
            m={3}
            flexDirection="column"
            alignItems={'center'}
            color={pathname === '/profile/view' ? activeColor : linkColor}
          >
            Visualizar
          </Flex>
        </Link> */}
      </Flex>
    </Box>
  )
}
