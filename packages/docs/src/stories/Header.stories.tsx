import { Header } from '../components/Header'

export default {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}

export const LoggedOut = {}
