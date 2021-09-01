import React from 'react'
import { Meta, Story } from '@storybook/react'
import { NextButton, NextButtonProps } from '../src/components/atoms/NextButton'
import { action } from '@storybook/addon-actions'

const meta: Meta = {
  title: 'NextButton',
  component: NextButton,
  argTypes: {
    onclick: { action: 'clicked'},
    children: {
      defaultValue: 'Default text'
    }
  }
}

export default meta

const Template: Story<NextButtonProps> = (args) => <NextButton {...args} />

export const Default = Template.bind({})

export const Secondary = Template.bind({})

Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
  onClick: action('secondary click')
}
