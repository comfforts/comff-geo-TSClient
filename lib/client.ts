import * as grpc from '@grpc/grpc-js'
import * as fs from 'fs'
import * as path from 'path'
import { GeoClient } from './proto/_gen/geo_grpc_pb'

const interceptor = function (options: grpc.CallOptions, nextCall: any): any {
  return new grpc.InterceptingCall(nextCall(options), {
    start: function (metadata, listener, next) {
      const newListener = {
        onReceiveMetadata: function (metadata: grpc.Metadata, next: any) {
          next(metadata)
        },
        onReceiveMessage: function (message: any, next: any) {
          next(message)
        },
        onReceiveStatus: function (status: grpc.StatusObject, next: any) {
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

const getChannelCredentials = (): grpc.ChannelCredentials => {
  const rootCert = fs.readFileSync(path.resolve('./certs/ca.pem'))
  const clientCert = fs.readFileSync(path.resolve('./certs/geo-client.pem'))
  const clientKey = fs.readFileSync(path.resolve('./certs/geo-client-key.pem'))

  return grpc.ChannelCredentials.createSsl(rootCert, clientKey, clientCert)
}

const geoClient = new GeoClient(process.env.GRPC_GEO || '', getChannelCredentials(), {
  interceptors: [interceptor]
})

export default geoClient
