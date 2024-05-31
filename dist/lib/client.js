'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            }
          }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
const grpc = __importStar(require('@grpc/grpc-js'))
const fs = __importStar(require('fs'))
const path = __importStar(require('path'))
const geo_grpc_pb_1 = require('./proto/_gen/geo_grpc_pb')
const interceptor = function (options, nextCall) {
  return new grpc.InterceptingCall(nextCall(options), {
    start: function (metadata, listener, next) {
      const newListener = {
        onReceiveMetadata: function (metadata, next) {
          next(metadata)
        },
        onReceiveMessage: function (message, next) {
          next(message)
        },
        onReceiveStatus: function (status, next) {
          next(status)
        }
      }
      next(metadata, newListener)
    },
    sendMessage: function (message, next) {
      next(message)
    },
    halfClose: function (next) {
      next()
    },
    cancel: function (next) {
      next()
    }
  })
}
const getChannelCredentials = () => {
  const rootCert = fs.readFileSync(path.resolve('./certs/ca.pem'))
  const clientCert = fs.readFileSync(path.resolve('./certs/geo-client.pem'))
  const clientKey = fs.readFileSync(path.resolve('./certs/geo-client-key.pem'))
  return grpc.ChannelCredentials.createSsl(rootCert, clientKey, clientCert)
}
const geoClient = new geo_grpc_pb_1.GeoClient(
  process.env.GRPC_GEO ?? '',
  getChannelCredentials(),
  {
    interceptors: [interceptor]
  }
)
exports.default = geoClient
