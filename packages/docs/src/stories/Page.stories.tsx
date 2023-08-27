import { Page } from '../components/Page'

import { within, userEvent } from '@storybook/testing-library'

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
}

export const LoggedOut = {}

type PlayParams = {
  canvasElement: HTMLCanvasElement
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvasElement }: PlayParams) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i
    })
    await userEvent.click(loginButton)
  }
}