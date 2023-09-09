import { ReactNode } from 'react'

import { Box, keyframes } from '@chakra-ui/react'
type PulseRingProps = {
  children: ReactNode
  size: string
  color: string
}

const pulseRingAnimation = keyframes`
  0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

export function NextPulseRing({ children, size, color }: PulseRingProps) {
  return (
    <Box
      data-testid="pulse-ring"
      as="div"
      position="relative"
      w={size}
      h={size}
      _before={{
        content: "''",
        position: 'relative',
        display: 'block',
        width: '300%',
        height: '300%',
        boxSizing: 'border-box',
        marginLeft: '-100%',
        marginTop: '-100%',
        borderRadius: '50%',
        bgColor: color,
        animation: `2.25s ${pulseRingAnimation} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`
      }}
    >
      {children}
    </Box>
  )
}
