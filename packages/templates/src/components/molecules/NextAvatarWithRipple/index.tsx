import { Avatar, Flex } from '@chakra-ui/react'

import { NextPulseRing } from '../NextPulseRing'

type NextAvatarWithRippleProps = {
  avatarSrc: string
  size?: string
  color?: string
}

export function NextAvatarWithRipple({
  avatarSrc,
  size = '96px',
  color = 'next-primary'
}: NextAvatarWithRippleProps) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="140px"
      w="full"
      overflow="hidden"
    >
      <NextPulseRing data-testid="pulse-ring" size={size} color={color}>
        <Avatar
          src={avatarSrc}
          size="full"
          position="absolute"
          top={0}
          onLoad={function (e) {
            e.currentTarget.setAttribute('data-loaded', 'true')
          }}
        />
      </NextPulseRing>
    </Flex>
  )
}
