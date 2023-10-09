import React, { PropsWithChildren } from 'react'

interface NextLayoutProps {
  title?: string
}

export function NextLayout({ children }: PropsWithChildren<NextLayoutProps>) {
  return <main>{children}</main>
}
