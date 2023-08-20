import { Button, ButtonProps } from '@nextime-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'FORMS/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button'
  },
  argTypes: {
    colorScheme: {
      options: ['whiteAlpha', 'blackAlpha', 'gray'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ButtonProps>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Usage = {
  args: {
    colorScheme: 'blue',
    children: 'Button'
  }
}

export const Large = {
  args: {
    size: 'large'
  }
}

export const Small = {
  args: {
    size: 'small'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: 'Disabled'
  }
}
