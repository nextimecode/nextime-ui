import { PropsWithChildren } from 'react'

import { Button } from '@chakra-ui/react'

export function NextButton({ children }: PropsWithChildren) {
  return <Button>{children}</Button>
}
