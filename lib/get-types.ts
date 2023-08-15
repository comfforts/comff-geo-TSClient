import { AddressTypesRequest } from './proto/_gen/geo_pb'
import geoClient from './client'
import type { AddressTypesResponse } from './proto/_gen/geo_pb'
import type { TypesResponse } from './index'

export const getTypes = async (): Promise<TypesResponse> => {
  return await new Promise<TypesResponse>((resolve, reject) => {
    const req = new AddressTypesRequest()
    try {
      geoClient.getAddressTypes(req, (err, res: AddressTypesResponse) => {
        if (err != null) {
          console.log('getTypes() - request error, %o', { err })
          resolve({ error: err })
        } else {
          const types = res.getAddresstypesList()
          if (types?.length > 0) {
            resolve({ types })
          } else {
            const err = new Error('no address type found')
            console.error('getTypes() - no address type found, %o', { err })
            resolve({ error: err })
          }
        }
      })
    } catch (err) {
      console.error('getTypes() - system error, %o', { err })
      resolve({ error: err as Error })
    }
  })
}
