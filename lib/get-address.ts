import { GetAddressRequest } from './proto/_gen/geo_pb'
import geoClient from './client'
import { mapAddressToIAddress } from './index'
import type { AddressResponse } from './proto/_gen/geo_pb'

export const getAddress = async (id: string): Promise<AddrResponse> => {
  return await new Promise<AddrResponse>((resolve, reject) => {
    const gaReq = new GetAddressRequest()
    gaReq.setId(id)

    try {
      geoClient.getAddress(gaReq, (err, res: AddressResponse) => {
        if (err) {
          console.error('getAddress() - request error: ', { err, id })
          reject(err)
        } else {
          const addr = res.getAddress()
          if (addr) {
            console.debug('getAddress(), %o', { addr })
            resolve({ address: mapAddressToIAddress(addr) })
          } else {
            const err = new Error('error getting shop')
            console.error('getAddress() - error getting shop: ', { err, id })
            reject(err)
          }
        }
      })
    } catch (err: any) {
      console.error('getAddress() - system error: ', { err, id })
      reject(err)
    }
  })
}
