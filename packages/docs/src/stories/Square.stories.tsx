import { Square, SquareProps } from '@nextime-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'LAYOUT/Square',
  component: Square,
  tags: ['autodocs'],
  args: {
    children: 'S'
  },
  argTypes: {}
} as Meta<SquareProps>

export const Usage: StoryObj<SquareProps> = {
  args: {
    size: '60px',
    bg: 'purple.700',
    color: 'white'
  }
}
