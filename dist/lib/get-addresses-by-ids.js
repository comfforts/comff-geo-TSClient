'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getAddressesByIds = void 0
const geo_pb_1 = require('./proto/_gen/geo_pb')
const client_1 = __importDefault(require('./client'))
const index_1 = require('./index')
const getAddressesByIds = async (ids) => {
  return await new Promise((resolve, reject) => {
    const gaReq = new geo_pb_1.GetAddressesRequest()
    gaReq.setAddressidsList(ids)
    try {
      client_1.default.getAddressesByIds(gaReq, (err, res) => {
        if (err != null) {
          console.error('getAddressesByIds() - request error: ', { err, ids })
          resolve({ error: err })
        } else {
          const addrs = res.getAddressesList()
          if (addrs?.length > 1) {
            resolve({ addresses: (0, index_1.mapAddressesToIAddresses)(addrs) })
          } else {
            const err = new Error('error getting address by ids')
            console.error(
              'getAddressesByIds() - error getting address by ids: ',
              {
                err,
                ids
              }
            )
            resolve({ error: err })
          }
        }
      })
    } catch (err) {
      console.error('getAddressesByIds() - system error: ', { err, ids })
      resolve({ error: err })
    }
  })
}
exports.getAddressesByIds = getAddressesByIds
