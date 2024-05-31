'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getTypes = void 0
const geo_pb_1 = require('./proto/_gen/geo_pb')
const client_1 = __importDefault(require('./client'))
const getTypes = async () => {
  return await new Promise((resolve, reject) => {
    const req = new geo_pb_1.AddressTypesRequest()
    try {
      client_1.default.getAddressTypes(req, (err, res) => {
        if (err != null) {
          console.log('getTypes() - request error, %o', { err })
          resolve({ error: err })
        } else {
          const types = res.getAddresstypesList()
          if (types?.length > 0) {
            resolve({ types })
          } else {
            const err = new Error('no address type found')
            console.error('getTypes() - no address type found, %o', { err })
            resolve({ error: err })
          }
        }
      })
    } catch (err) {
      console.error('getTypes() - system error, %o', { err })
      resolve({ error: err })
    }
  })
}
exports.getTypes = getTypes
