import { AddressRouteRequest } from './proto/_gen/geo_pb'
import client from './client'
import { mapRouteLegsToIRoutes } from './index'
import type { RouteResponse } from './proto/_gen/geo_pb'
import type { AddressRouteParams, IRoutesResponse } from './index'

export const getAddressRoute = async (
  params: AddressRouteParams
): Promise<IRoutesResponse> => {
  return await new Promise<IRoutesResponse>((resolve, reject) => {
    const arReq = new AddressRouteRequest()
    arReq.setOriginsList(params.originIds)
    arReq.setDestinationsList(params.destIds)

    try {
      client.getAddressRoute(arReq, (err, res: RouteResponse) => {
        if (err != null) {
          console.error('getAddressRoute() - request error: ', { err, params })
          resolve({ error: err })
        } else {
          const routes = res.getRoutelegsList()
          if (routes.length > 0) {
            resolve({ routes: mapRouteLegsToIRoutes(routes) })
          } else {
            const err = new Error('error getting address route')
            console.error('getAddressRoute() - error getting address route', {
              err,
              params
            })
            resolve({ error: err })
          }
        }
      })
    } catch (err) {
      console.error('getAddressRoute() - system error: ', { err, params })
      resolve({ error: err as Error })
    }
  })
}
