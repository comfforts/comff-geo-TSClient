import { GeoRequest } from './proto/_gen/geo_pb'
import geoClient from './client'
import { mapPointToILocation } from './index'
import type { GeoResponse } from './proto/_gen/geo_pb'

export const geoLocate = async (
  loc: GeoLocationParams
): Promise<GeoLocationResponse> => {
  return await new Promise<GeoLocationResponse>((resolve, reject) => {
    const gaReq = new GeoRequest()
    gaReq.setLatitude(loc.latitude)
    gaReq.setLongitude(loc.longitude)
    gaReq.setStreet(loc.street ?? '')
    gaReq.setCity(loc.city ?? '')
    gaReq.setState(loc.state ?? '')
    gaReq.setPostalcode(loc.postalCode ?? '')
    gaReq.setCountry(loc.country ?? '')

    try {
      geoClient.geoLocate(gaReq, (err, res: GeoResponse) => {
        if (err) {
          console.error('geoLocate() - request error: ', { err, loc })
          resolve({ error: err })
        } else {
          const pt = res.getPoint()
          if (pt !== undefined) {
            resolve({ point: mapPointToILocation(pt) })
          } else {
            const err = new Error('error geo locating')
            console.error('geoLocate() - error geo locating: ', { err, loc })
            resolve({ error: err })
          }
        }
      })
    } catch (err) {
      console.error('geoLocate() - system error: ', { err, loc })
      resolve({ error: err as Error })
    }
  })
}
