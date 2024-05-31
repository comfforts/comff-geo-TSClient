'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getAddress = void 0
const geo_pb_1 = require('./proto/_gen/geo_pb')
const client_1 = __importDefault(require('./client'))
const index_1 = require('./index')
const getAddress = async (id) => {
  return await new Promise((resolve, reject) => {
    const gaReq = new geo_pb_1.GetAddressRequest()
    gaReq.setId(id)
    try {
      client_1.default.getAddress(gaReq, (err, res) => {
        if (err != null) {
          console.error('getAddress() - request error: ', { err, id })
          resolve({ error: err })
        } else {
          const addr = res.getAddress()
          if (addr !== undefined) {
            resolve({ address: (0, index_1.mapAddressToIAddress)(addr) })
          } else {
            const err = new Error('error getting shop')
            console.error('getAddress() - error getting shop: ', { err, id })
            resolve({ error: err })
          }
        }
      })
    } catch (err) {
      console.error('getAddress() - system error: ', { err, id })
      resolve({ error: err })
    }
  })
}
exports.getAddress = getAddress
