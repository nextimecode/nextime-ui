import { Square, SquareProps } from '@nextime-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<SquareProps> = {
  title: 'LAYOUT/Square',
  component: Square,
  tags: ['autodocs'],
  args: {
    children: 'S'
  },
  argTypes: {}
}

const Usage: StoryObj<SquareProps> = {
  args: {
    size: '60px',
    bg: 'purple.700',
    color: 'white'
  }
}

export default meta
export { Usage }
