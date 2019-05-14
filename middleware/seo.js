export default function({ route, redirect }) {
  const regex = /\/$/
  const slash = regex.test(route.fullPath)

  // redirect with 301 if fullPath ends with '/'
  if (slash && route.fullPath !== '/') {
    const path = route.fullPath.replace(regex, '')
    redirect(301, path)
  }
}
