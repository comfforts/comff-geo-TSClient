'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.deleteAddress = void 0
const geo_pb_1 = require('./proto/_gen/geo_pb')
const client_1 = __importDefault(require('./client'))
const deleteAddress = async (id) => {
  return await new Promise((resolve, reject) => {
    const gaReq = new geo_pb_1.DeleteAddressRequest()
    gaReq.setId(id)
    try {
      client_1.default.deleteAddress(gaReq, (err, res) => {
        if (err != null) {
          console.error('deleteAddress() - request error: ', { err, id })
          resolve({ ok: false, error: err })
        } else {
          const ok = res.getOk()
          if (ok) {
            resolve({ ok })
          } else {
            const err = new Error('error deleting address')
            console.error('deleteAddress() - error deleting address: ', {
              err,
              id
            })
            resolve({ ok: false, error: err })
          }
        }
      })
    } catch (err) {
      console.error('deleteAddress() - system error: ', { err, id })
      resolve({ ok: false, error: err })
    }
  })
}
exports.deleteAddress = deleteAddress
