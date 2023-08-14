// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var geo_pb = require('./geo_pb.js');

function serialize_geo_v1_AddGeoLocationRequest(arg) {
  if (!(arg instanceof geo_pb.AddGeoLocationRequest)) {
    throw new Error('Expected argument of type geo.v1.AddGeoLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_AddGeoLocationRequest(buffer_arg) {
  return geo_pb.AddGeoLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_AddressRequest(arg) {
  if (!(arg instanceof geo_pb.AddressRequest)) {
    throw new Error('Expected argument of type geo.v1.AddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_AddressRequest(buffer_arg) {
  return geo_pb.AddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_AddressResponse(arg) {
  if (!(arg instanceof geo_pb.AddressResponse)) {
    throw new Error('Expected argument of type geo.v1.AddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_AddressResponse(buffer_arg) {
  return geo_pb.AddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_AddressRouteRequest(arg) {
  if (!(arg instanceof geo_pb.AddressRouteRequest)) {
    throw new Error('Expected argument of type geo.v1.AddressRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_AddressRouteRequest(buffer_arg) {
  return geo_pb.AddressRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_AddressTypesRequest(arg) {
  if (!(arg instanceof geo_pb.AddressTypesRequest)) {
    throw new Error('Expected argument of type geo.v1.AddressTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_AddressTypesRequest(buffer_arg) {
  return geo_pb.AddressTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_AddressTypesResponse(arg) {
  if (!(arg instanceof geo_pb.AddressTypesResponse)) {
    throw new Error('Expected argument of type geo.v1.AddressTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_AddressTypesResponse(buffer_arg) {
  return geo_pb.AddressTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_AddressesResponse(arg) {
  if (!(arg instanceof geo_pb.AddressesResponse)) {
    throw new Error('Expected argument of type geo.v1.AddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_AddressesResponse(buffer_arg) {
  return geo_pb.AddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_DeleteAddressRequest(arg) {
  if (!(arg instanceof geo_pb.DeleteAddressRequest)) {
    throw new Error('Expected argument of type geo.v1.DeleteAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_DeleteAddressRequest(buffer_arg) {
  return geo_pb.DeleteAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_DeleteGeoLocationRequest(arg) {
  if (!(arg instanceof geo_pb.DeleteGeoLocationRequest)) {
    throw new Error('Expected argument of type geo.v1.DeleteGeoLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_DeleteGeoLocationRequest(buffer_arg) {
  return geo_pb.DeleteGeoLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_DeleteResponse(arg) {
  if (!(arg instanceof geo_pb.DeleteResponse)) {
    throw new Error('Expected argument of type geo.v1.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_DeleteResponse(buffer_arg) {
  return geo_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_GeoLocationResponse(arg) {
  if (!(arg instanceof geo_pb.GeoLocationResponse)) {
    throw new Error('Expected argument of type geo.v1.GeoLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_GeoLocationResponse(buffer_arg) {
  return geo_pb.GeoLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_GeoLocationsResponse(arg) {
  if (!(arg instanceof geo_pb.GeoLocationsResponse)) {
    throw new Error('Expected argument of type geo.v1.GeoLocationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_GeoLocationsResponse(buffer_arg) {
  return geo_pb.GeoLocationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_GeoRequest(arg) {
  if (!(arg instanceof geo_pb.GeoRequest)) {
    throw new Error('Expected argument of type geo.v1.GeoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_GeoRequest(buffer_arg) {
  return geo_pb.GeoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_GeoResponse(arg) {
  if (!(arg instanceof geo_pb.GeoResponse)) {
    throw new Error('Expected argument of type geo.v1.GeoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_GeoResponse(buffer_arg) {
  return geo_pb.GeoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_GeoRouteRequest(arg) {
  if (!(arg instanceof geo_pb.GeoRouteRequest)) {
    throw new Error('Expected argument of type geo.v1.GeoRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_GeoRouteRequest(buffer_arg) {
  return geo_pb.GeoRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_GetAddressRequest(arg) {
  if (!(arg instanceof geo_pb.GetAddressRequest)) {
    throw new Error('Expected argument of type geo.v1.GetAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_GetAddressRequest(buffer_arg) {
  return geo_pb.GetAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_GetAddressesRequest(arg) {
  if (!(arg instanceof geo_pb.GetAddressesRequest)) {
    throw new Error('Expected argument of type geo.v1.GetAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_GetAddressesRequest(buffer_arg) {
  return geo_pb.GetAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_GetGeoLocationRequest(arg) {
  if (!(arg instanceof geo_pb.GetGeoLocationRequest)) {
    throw new Error('Expected argument of type geo.v1.GetGeoLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_GetGeoLocationRequest(buffer_arg) {
  return geo_pb.GetGeoLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_v1_RouteResponse(arg) {
  if (!(arg instanceof geo_pb.RouteResponse)) {
    throw new Error('Expected argument of type geo.v1.RouteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_v1_RouteResponse(buffer_arg) {
  return geo_pb.RouteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GeoService = exports.GeoService = {
  geoLocate: {
    path: '/geo.v1.Geo/GeoLocate',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.GeoRequest,
    responseType: geo_pb.GeoResponse,
    requestSerialize: serialize_geo_v1_GeoRequest,
    requestDeserialize: deserialize_geo_v1_GeoRequest,
    responseSerialize: serialize_geo_v1_GeoResponse,
    responseDeserialize: deserialize_geo_v1_GeoResponse,
  },
  getGeoRoute: {
    path: '/geo.v1.Geo/GetGeoRoute',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.GeoRouteRequest,
    responseType: geo_pb.RouteResponse,
    requestSerialize: serialize_geo_v1_GeoRouteRequest,
    requestDeserialize: deserialize_geo_v1_GeoRouteRequest,
    responseSerialize: serialize_geo_v1_RouteResponse,
    responseDeserialize: deserialize_geo_v1_RouteResponse,
  },
  getAddressRoute: {
    path: '/geo.v1.Geo/GetAddressRoute',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.AddressRouteRequest,
    responseType: geo_pb.RouteResponse,
    requestSerialize: serialize_geo_v1_AddressRouteRequest,
    requestDeserialize: deserialize_geo_v1_AddressRouteRequest,
    responseSerialize: serialize_geo_v1_RouteResponse,
    responseDeserialize: deserialize_geo_v1_RouteResponse,
  },
  addGeoLocation: {
    path: '/geo.v1.Geo/AddGeoLocation',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.AddGeoLocationRequest,
    responseType: geo_pb.GeoLocationResponse,
    requestSerialize: serialize_geo_v1_AddGeoLocationRequest,
    requestDeserialize: deserialize_geo_v1_AddGeoLocationRequest,
    responseSerialize: serialize_geo_v1_GeoLocationResponse,
    responseDeserialize: deserialize_geo_v1_GeoLocationResponse,
  },
  getGeoLocation: {
    path: '/geo.v1.Geo/GetGeoLocation',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.GetGeoLocationRequest,
    responseType: geo_pb.GeoLocationResponse,
    requestSerialize: serialize_geo_v1_GetGeoLocationRequest,
    requestDeserialize: deserialize_geo_v1_GetGeoLocationRequest,
    responseSerialize: serialize_geo_v1_GeoLocationResponse,
    responseDeserialize: deserialize_geo_v1_GeoLocationResponse,
  },
  getGeoLocations: {
    path: '/geo.v1.Geo/GetGeoLocations',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.GetGeoLocationRequest,
    responseType: geo_pb.GeoLocationsResponse,
    requestSerialize: serialize_geo_v1_GetGeoLocationRequest,
    requestDeserialize: deserialize_geo_v1_GetGeoLocationRequest,
    responseSerialize: serialize_geo_v1_GeoLocationsResponse,
    responseDeserialize: deserialize_geo_v1_GeoLocationsResponse,
  },
  deleteGeoLocation: {
    path: '/geo.v1.Geo/DeleteGeoLocation',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.DeleteGeoLocationRequest,
    responseType: geo_pb.DeleteResponse,
    requestSerialize: serialize_geo_v1_DeleteGeoLocationRequest,
    requestDeserialize: deserialize_geo_v1_DeleteGeoLocationRequest,
    responseSerialize: serialize_geo_v1_DeleteResponse,
    responseDeserialize: deserialize_geo_v1_DeleteResponse,
  },
  getAddressTypes: {
    path: '/geo.v1.Geo/GetAddressTypes',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.AddressTypesRequest,
    responseType: geo_pb.AddressTypesResponse,
    requestSerialize: serialize_geo_v1_AddressTypesRequest,
    requestDeserialize: deserialize_geo_v1_AddressTypesRequest,
    responseSerialize: serialize_geo_v1_AddressTypesResponse,
    responseDeserialize: deserialize_geo_v1_AddressTypesResponse,
  },
  addAddress: {
    path: '/geo.v1.Geo/AddAddress',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.AddressRequest,
    responseType: geo_pb.AddressResponse,
    requestSerialize: serialize_geo_v1_AddressRequest,
    requestDeserialize: deserialize_geo_v1_AddressRequest,
    responseSerialize: serialize_geo_v1_AddressResponse,
    responseDeserialize: deserialize_geo_v1_AddressResponse,
  },
  updateAddress: {
    path: '/geo.v1.Geo/UpdateAddress',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.AddressRequest,
    responseType: geo_pb.AddressResponse,
    requestSerialize: serialize_geo_v1_AddressRequest,
    requestDeserialize: deserialize_geo_v1_AddressRequest,
    responseSerialize: serialize_geo_v1_AddressResponse,
    responseDeserialize: deserialize_geo_v1_AddressResponse,
  },
  getAddress: {
    path: '/geo.v1.Geo/GetAddress',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.GetAddressRequest,
    responseType: geo_pb.AddressResponse,
    requestSerialize: serialize_geo_v1_GetAddressRequest,
    requestDeserialize: deserialize_geo_v1_GetAddressRequest,
    responseSerialize: serialize_geo_v1_AddressResponse,
    responseDeserialize: deserialize_geo_v1_AddressResponse,
  },
  getAddresses: {
    path: '/geo.v1.Geo/GetAddresses',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.GetAddressesRequest,
    responseType: geo_pb.AddressesResponse,
    requestSerialize: serialize_geo_v1_GetAddressesRequest,
    requestDeserialize: deserialize_geo_v1_GetAddressesRequest,
    responseSerialize: serialize_geo_v1_AddressesResponse,
    responseDeserialize: deserialize_geo_v1_AddressesResponse,
  },
  getAddressesByIds: {
    path: '/geo.v1.Geo/GetAddressesByIds',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.GetAddressesRequest,
    responseType: geo_pb.AddressesResponse,
    requestSerialize: serialize_geo_v1_GetAddressesRequest,
    requestDeserialize: deserialize_geo_v1_GetAddressesRequest,
    responseSerialize: serialize_geo_v1_AddressesResponse,
    responseDeserialize: deserialize_geo_v1_AddressesResponse,
  },
  deleteAddress: {
    path: '/geo.v1.Geo/DeleteAddress',
    requestStream: false,
    responseStream: false,
    requestType: geo_pb.DeleteAddressRequest,
    responseType: geo_pb.DeleteResponse,
    requestSerialize: serialize_geo_v1_DeleteAddressRequest,
    requestDeserialize: deserialize_geo_v1_DeleteAddressRequest,
    responseSerialize: serialize_geo_v1_DeleteResponse,
    responseDeserialize: deserialize_geo_v1_DeleteResponse,
  },
};

exports.GeoClient = grpc.makeGenericClientConstructor(GeoService);
