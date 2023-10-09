import { Button, ButtonProps } from '@nextime-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ButtonProps> = {
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
}

const Usage: StoryObj<ButtonProps> = {
  args: {
    colorScheme: 'blue',
    children: 'Button'
  }
}

const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large'
  }
}

const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small'
  }
}

const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: 'Disabled'
  }
}

export default meta
export { Usage, Large, Small, Disabled }
