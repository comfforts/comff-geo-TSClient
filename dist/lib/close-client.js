'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.closeClient = void 0
const client_1 = __importDefault(require('./client'))
const closeClient = () => {
  try {
    client_1.default.close()
  } catch (err) {
    console.error('error closing geo client')
    return err
  }
}
exports.closeClient = closeClient
