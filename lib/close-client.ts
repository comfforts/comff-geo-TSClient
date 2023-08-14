import geoClient from './client'

export const closeClient = (): Error | undefined => {
  try {
    geoClient.close()
  } catch (err) {
    console.error('error closing geo client')
    return err as Error
  }
}
