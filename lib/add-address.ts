import { AddressRequest, AddressType } from './proto/_gen/geo_pb'
import geoClient from './client'
import { mapAddressToIAddress } from './index'
import type { AddressResponse } from './proto/_gen/geo_pb'
import type { AddAddressRequest, AddrResponse } from './index'

export const addAddress = async (
  addReq: AddAddressRequest
): Promise<AddrResponse> => {
  return await new Promise<AddrResponse>((resolve, reject) => {
    const req = new AddressRequest()
    req.setRequestedby(addReq.requestedBy)
    req.setType(addReq.address.type ?? AddressType.GEO)
    req.setPostalcode(addReq.address.postalCode ?? '')
    req.setCountry(addReq.address.country ?? '')
    req.setStreet(addReq.address.street ?? '')
    req.setCity(addReq.address.city ?? '')
    req.setState(addReq.address.state ?? '')

    try {
      geoClient.addAddress(req, (err, res: AddressResponse) => {
        if (err != null) {
          console.error('addAddress() - request error: ', {
            err,
            request: addReq
          })
          resolve({ error: err })
        } else {
          const addr = res.getAddress()
          if (addr !== undefined) {
            resolve({ address: mapAddressToIAddress(addr) })
          } else {
            const err = new Error('error saving address')
            console.error('addAddress() - error saving address: ', {
              err,
              request: addReq
            })
            resolve({ error: err })
          }
        }
      })
    } catch (err) {
      console.error('addAddress() - system error: ', { err, request: addReq })
      resolve({ error: err as Error })
    }
  })
}
