import { Box, BoxProps } from '@nextime-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'LAYOUT/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: 'This is the Box'
  },
  argTypes: {}
} as Meta<BoxProps>

export const Usage: StoryObj<BoxProps> = {
  args: {}
}
