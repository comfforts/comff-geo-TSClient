import geoClient from './client'

export const closeClient = (): void => {
  try {
    geoClient.close()
  } catch (err) {
    console.error('error closing geo client')
  }
}
