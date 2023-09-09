import Link from 'next/link'

import { Box, Flex, HStack } from '@chakra-ui/react'

import packageInfo from '../../../../package.json'
import { layout } from '../../../data'
import NextimeSvg from '../../atoms/NextimeSvg'

export const NextimeFooter = () => {
  const version = packageInfo.version
  return (
    <Flex
      bgColor="next-primary"
      color="white"
      fontSize="sm"
      bottom="0px"
      position="fixed"
      w="100%"
      display={['block', 'flex']}
      alignItems="center"
      zIndex={'docked'}
    >
      <Box as="div" w={['100%', '50%']} textAlign="center" py={[3, 4]}>
        Copyright © {new Date().getFullYear()} | {layout.siteName} | v{version}
      </Box>

      <Box as="div" placeContent="center" w={['100%', '50%']} py={[3, 4]}>
        <HStack display="flex" placeContent={['center', 'auto']}>
          <Box as="span">from</Box>
          <Link href="https://nextime.com.br">
            <NextimeSvg />
          </Link>
        </HStack>
        <Box as="div" display="none">
          Desenvolvedores:
          <Link href="https://github.com/phdduarte">Pedro Duarte</Link>
        </Box>
      </Box>
    </Flex>
  )
}
