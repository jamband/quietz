import { APP_NAME, APP_DESCRIPTION } from '~/plugins/constants'

export default (_, inject) => {
  const app = {
    name: APP_NAME,
    description: APP_DESCRIPTION,
    repository: `jamband/${APP_NAME.toLowerCase()}`
  }
  inject('app', app)
}
