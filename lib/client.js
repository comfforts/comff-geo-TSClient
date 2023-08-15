var _a;
import * as grpc from '@grpc/grpc-js';
import * as fs from 'fs';
import * as path from 'path';
import { GeoClient } from './proto/_gen/geo_grpc_pb';
var interceptor = function (options, nextCall) {
    return new grpc.InterceptingCall(nextCall(options), {
        start: function (metadata, listener, next) {
            var newListener = {
                onReceiveMetadata: function (metadata, next) {
                    next(metadata);
                },
                onReceiveMessage: function (message, next) {
                    next(message);
                },
                onReceiveStatus: function (status, next) {
                    next(status);
                }
            };
            next(metadata, newListener);
        },
        sendMessage: function (message, next) {
            next(message);
        },
        halfClose: function (next) {
            next();
        },
        cancel: function (next) {
            next();
        }
    });
};
var getChannelCredentials = function () {
    var rootCert = fs.readFileSync(path.resolve('./certs/ca.pem'));
    var clientCert = fs.readFileSync(path.resolve('./certs/geo-client.pem'));
    var clientKey = fs.readFileSync(path.resolve('./certs/geo-client-key.pem'));
    return grpc.ChannelCredentials.createSsl(rootCert, clientKey, clientCert);
};
var geoClient = new GeoClient((_a = process.env.GRPC_GEO) !== null && _a !== void 0 ? _a : '', getChannelCredentials(), {
    interceptors: [interceptor]
});
export default geoClient;
