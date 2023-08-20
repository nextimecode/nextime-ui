import { Circle, CircleProps } from '@nextime-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'LAYOUT/Circle',
  component: Circle,
  tags: ['autodocs'],
  args: {
    children: 'C'
  },
  argTypes: {}
} as Meta<CircleProps>

export const Usage: StoryObj<CircleProps> = {
  args: {
    size: '60px',
    bg: 'tomato',
    color: 'white'
  }
}
