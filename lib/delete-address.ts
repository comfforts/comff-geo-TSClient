import { DeleteAddressRequest, DeleteResponse } from './proto/_gen/geo_pb'
import geoClient from './client'

export const deleteAddress = async (id: string): Promise<OkResponse> => {
  return new Promise<OkResponse>((resolve, reject) => {
    const gaReq = new DeleteAddressRequest()
    gaReq.setId(id)

    try {
      geoClient.deleteAddress(gaReq, (err, res: DeleteResponse) => {
        if (err) {
          console.error('deleteAddress() - request error: ', { err, id })
          resolve({ ok: false, error: err })
        } else {
          const ok = res.getOk()
          if (ok) {
            resolve({ ok })
          } else {
            const err = new Error(`error deleting address`)
            console.error('deleteAddress() - error deleting address: ', {
              err,
              id
            })
            resolve({ ok: false, error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('deleteAddress() - system error: ', { err, id })
      resolve({ ok: false, error: err })
    }
  })
}
