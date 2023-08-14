import { GetAddressesRequest } from './proto/_gen/geo_pb'
import geoClient from './client'
import { mapAddressesToIAddresses } from './index'
import type { AddressesResponse } from './proto/_gen/geo_pb'

export const getAddressesByIds = async (
  ids: string[]
): Promise<AddrsResponse> => {
  return await new Promise<AddrsResponse>((resolve, reject) => {
    const gaReq = new GetAddressesRequest()
    gaReq.setAddressidsList(ids)

    try {
      geoClient.getAddressesByIds(gaReq, (err, res: AddressesResponse) => {
        if (err) {
          console.error('getAddressesByIds() - request error: ', { err, ids })
          reject(err)
        } else {
          const addrs = res.getAddressesList()
          if (addrs?.length > 1) {
            resolve({ addresses: mapAddressesToIAddresses(addrs) })
          } else {
            const err = new Error('error getting address by ids')
            console.error(
              'getAddressesByIds() - error getting address by ids: ',
              {
                err,
                ids
              }
            )
            reject(err)
          }
        }
      })
    } catch (err: any) {
      console.error('getAddressesByIds() - system error: ', { err, ids })
      reject(err)
    }
  })
}
