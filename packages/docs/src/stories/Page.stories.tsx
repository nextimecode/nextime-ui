import { Page } from '../components/Page'

import { within, userEvent } from '@storybook/testing-library'

export default {
  title: 'Templates/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen'
  }
}

export const LoggedOut = {}

type PlayParams = {
  canvasElement: HTMLCanvasElement
}

export const LoggedIn = {
  play: async ({ canvasElement }: PlayParams) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i
    })
    await userEvent.click(loginButton)
  }
}
