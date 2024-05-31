'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.addAddress = void 0
const geo_pb_1 = require('./proto/_gen/geo_pb')
const client_1 = __importDefault(require('./client'))
const index_1 = require('./index')
const addAddress = async (addReq) => {
  return await new Promise((resolve, reject) => {
    const req = new geo_pb_1.AddressRequest()
    req.setRequestedby(addReq.requestedBy)
    req.setType(addReq.address.type ?? geo_pb_1.AddressType.GEO)
    req.setPostalcode(addReq.address.postalCode ?? '')
    req.setCountry(addReq.address.country ?? '')
    req.setStreet(addReq.address.street ?? '')
    req.setCity(addReq.address.city ?? '')
    req.setState(addReq.address.state ?? '')
    try {
      client_1.default.addAddress(req, (err, res) => {
        if (err != null) {
          console.error('addAddress() - request error: ', {
            err,
            request: addReq
          })
          resolve({ error: err })
        } else {
          const addr = res.getAddress()
          if (addr !== undefined) {
            resolve({ address: (0, index_1.mapAddressToIAddress)(addr) })
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
      resolve({ error: err })
    }
  })
}
exports.addAddress = addAddress
