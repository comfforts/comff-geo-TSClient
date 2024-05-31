'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.geoLocate = void 0
const geo_pb_1 = require('./proto/_gen/geo_pb')
const client_1 = __importDefault(require('./client'))
const index_1 = require('./index')
const geoLocate = async (loc) => {
  return await new Promise((resolve, reject) => {
    const gaReq = new geo_pb_1.GeoRequest()
    gaReq.setLatitude(loc.latitude)
    gaReq.setLongitude(loc.longitude)
    gaReq.setStreet(loc.street ?? '')
    gaReq.setCity(loc.city ?? '')
    gaReq.setState(loc.state ?? '')
    gaReq.setPostalcode(loc.postalCode ?? '')
    gaReq.setCountry(loc.country ?? '')
    try {
      client_1.default.geoLocate(gaReq, (err, res) => {
        if (err != null) {
          console.error('geoLocate() - request error: ', { err, loc })
          resolve({ error: err })
        } else {
          const pt = res.getPoint()
          if (pt !== undefined) {
            resolve({ point: (0, index_1.mapPointToILocation)(pt) })
          } else {
            const err = new Error('error geo locating')
            console.error('geoLocate() - error geo locating: ', { err, loc })
            resolve({ error: err })
          }
        }
      })
    } catch (err) {
      console.error('geoLocate() - system error: ', { err, loc })
      resolve({ error: err })
    }
  })
}
exports.geoLocate = geoLocate
