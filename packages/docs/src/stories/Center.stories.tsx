import type { Meta, StoryObj } from '@storybook/react'
import { Center, CenterProps } from '@nextime-ui/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'LAYOUT/Center',
  component: Center,
  tags: ['autodocs'],
  args: {
    children: 'This is the Center',
  },
  argTypes: {},
} as Meta<CenterProps>


export const Usage: StoryObj<CenterProps> = {
  args: {
    bg: 'tomato',
    h: '100px',
    color: 'white'
  }
}
