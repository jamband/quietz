export default (_, inject) => {
  const format = {
    capitalize: (value) => {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
  inject('format', format)
}
