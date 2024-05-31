'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getAddressRoute = void 0
const geo_pb_1 = require('./proto/_gen/geo_pb')
const client_1 = __importDefault(require('./client'))
const index_1 = require('./index')
const getAddressRoute = async (params) => {
  return await new Promise((resolve, reject) => {
    const arReq = new geo_pb_1.AddressRouteRequest()
    arReq.setOriginsList(params.originIds)
    arReq.setDestinationsList(params.destIds)
    try {
      client_1.default.getAddressRoute(arReq, (err, res) => {
        if (err != null) {
          console.error('getAddressRoute() - request error: ', { err, params })
          resolve({ error: err })
        } else {
          const routes = res.getRoutelegsList()
          if (routes.length > 0) {
            resolve({ routes: (0, index_1.mapRouteLegsToIRoutes)(routes) })
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
      resolve({ error: err })
    }
  })
}
exports.getAddressRoute = getAddressRoute
