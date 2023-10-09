import { Circle, CircleProps } from '@nextime-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<CircleProps> = {
  title: 'LAYOUT/Circle',
  component: Circle,
  tags: ['autodocs'],
  args: {
    children: 'C'
  },
  argTypes: {}
}

const Usage: StoryObj<CircleProps> = {
  args: {
    size: '60px',
    bg: 'tomato',
    color: 'white'
  }
}

export default meta
export { Usage }
