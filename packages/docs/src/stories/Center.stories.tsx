import { Center, CenterProps } from '@nextime-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<CenterProps> = {
  title: 'LAYOUT/Center',
  component: Center,
  tags: ['autodocs'],
  args: {
    children: 'This is the Center'
  },
  argTypes: {}
}

const Usage: StoryObj<CenterProps> = {
  args: {
    bg: 'tomato',
    h: '100px',
    color: 'white'
  }
}

export default meta
export { Usage }
