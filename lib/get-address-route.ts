import { AddressRouteRequest, RouteResponse } from './proto/_gen/geo_pb'
import client from './client'
import { mapRouteLegsToIRoutes } from './index'

export const getAddressRoute = async (
  params: AddressRouteParams
): Promise<IRoutesResponse> => {
  return new Promise<IRoutesResponse>((resolve, reject) => {
    const arReq = new AddressRouteRequest()
    arReq.setOriginsList(params.originIds)
    arReq.setDestinationsList(params.destIds)

    try {
      client.getAddressRoute(arReq, (err, res: RouteResponse) => {
        if (err) {
          console.error('getAddressRoute() - request error: ', { err, params })
          resolve({ error: err })
        } else {
          const routes = res.getRoutelegsList()
          if (routes && routes.length > 0) {
            resolve({ routes: mapRouteLegsToIRoutes(routes) })
          } else {
            const err = new Error(`error getting address route`)
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
