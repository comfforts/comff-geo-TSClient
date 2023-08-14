// package: geo.v1
// file: geo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js'
import * as geo_pb from './geo_pb'

interface IGeoService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  geoLocate: IGeoService_IGeoLocate
  addGeoLocation: IGeoService_IAddGeoLocation
  getGeoLocation: IGeoService_IGetGeoLocation
  getGeoLocations: IGeoService_IGetGeoLocations
  deleteGeoLocation: IGeoService_IDeleteGeoLocation
  getAddressTypes: IGeoService_IGetAddressTypes
  addAddress: IGeoService_IAddAddress
  updateAddress: IGeoService_IUpdateAddress
  getAddress: IGeoService_IGetAddress
  getAddresses: IGeoService_IGetAddresses
  getAddressesByIds: IGeoService_IGetAddressesByIds
  deleteAddress: IGeoService_IDeleteAddress
}

interface IGeoService_IGeoLocate
  extends grpc.MethodDefinition<geo_pb.GeoRequest, geo_pb.GeoResponse> {
  path: '/geo.v1.Geo/GeoLocate'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.GeoRequest>
  requestDeserialize: grpc.deserialize<geo_pb.GeoRequest>
  responseSerialize: grpc.serialize<geo_pb.GeoResponse>
  responseDeserialize: grpc.deserialize<geo_pb.GeoResponse>
}
interface IGeoService_IAddGeoLocation
  extends grpc.MethodDefinition<
    geo_pb.AddGeoLocationRequest,
    geo_pb.GeoLocationResponse
  > {
  path: '/geo.v1.Geo/AddGeoLocation'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.AddGeoLocationRequest>
  requestDeserialize: grpc.deserialize<geo_pb.AddGeoLocationRequest>
  responseSerialize: grpc.serialize<geo_pb.GeoLocationResponse>
  responseDeserialize: grpc.deserialize<geo_pb.GeoLocationResponse>
}
interface IGeoService_IGetGeoLocation
  extends grpc.MethodDefinition<
    geo_pb.GetGeoLocationRequest,
    geo_pb.GeoLocationResponse
  > {
  path: '/geo.v1.Geo/GetGeoLocation'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.GetGeoLocationRequest>
  requestDeserialize: grpc.deserialize<geo_pb.GetGeoLocationRequest>
  responseSerialize: grpc.serialize<geo_pb.GeoLocationResponse>
  responseDeserialize: grpc.deserialize<geo_pb.GeoLocationResponse>
}
interface IGeoService_IGetGeoLocations
  extends grpc.MethodDefinition<
    geo_pb.GetGeoLocationRequest,
    geo_pb.GeoLocationsResponse
  > {
  path: '/geo.v1.Geo/GetGeoLocations'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.GetGeoLocationRequest>
  requestDeserialize: grpc.deserialize<geo_pb.GetGeoLocationRequest>
  responseSerialize: grpc.serialize<geo_pb.GeoLocationsResponse>
  responseDeserialize: grpc.deserialize<geo_pb.GeoLocationsResponse>
}
interface IGeoService_IDeleteGeoLocation
  extends grpc.MethodDefinition<
    geo_pb.DeleteGeoLocationRequest,
    geo_pb.DeleteResponse
  > {
  path: '/geo.v1.Geo/DeleteGeoLocation'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.DeleteGeoLocationRequest>
  requestDeserialize: grpc.deserialize<geo_pb.DeleteGeoLocationRequest>
  responseSerialize: grpc.serialize<geo_pb.DeleteResponse>
  responseDeserialize: grpc.deserialize<geo_pb.DeleteResponse>
}
interface IGeoService_IGetAddressTypes
  extends grpc.MethodDefinition<
    geo_pb.AddressTypesRequest,
    geo_pb.AddressTypesResponse
  > {
  path: '/geo.v1.Geo/GetAddressTypes'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.AddressTypesRequest>
  requestDeserialize: grpc.deserialize<geo_pb.AddressTypesRequest>
  responseSerialize: grpc.serialize<geo_pb.AddressTypesResponse>
  responseDeserialize: grpc.deserialize<geo_pb.AddressTypesResponse>
}
interface IGeoService_IAddAddress
  extends grpc.MethodDefinition<geo_pb.AddressRequest, geo_pb.AddressResponse> {
  path: '/geo.v1.Geo/AddAddress'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.AddressRequest>
  requestDeserialize: grpc.deserialize<geo_pb.AddressRequest>
  responseSerialize: grpc.serialize<geo_pb.AddressResponse>
  responseDeserialize: grpc.deserialize<geo_pb.AddressResponse>
}
interface IGeoService_IUpdateAddress
  extends grpc.MethodDefinition<geo_pb.AddressRequest, geo_pb.AddressResponse> {
  path: '/geo.v1.Geo/UpdateAddress'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.AddressRequest>
  requestDeserialize: grpc.deserialize<geo_pb.AddressRequest>
  responseSerialize: grpc.serialize<geo_pb.AddressResponse>
  responseDeserialize: grpc.deserialize<geo_pb.AddressResponse>
}
interface IGeoService_IGetAddress
  extends grpc.MethodDefinition<
    geo_pb.GetAddressRequest,
    geo_pb.AddressResponse
  > {
  path: '/geo.v1.Geo/GetAddress'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.GetAddressRequest>
  requestDeserialize: grpc.deserialize<geo_pb.GetAddressRequest>
  responseSerialize: grpc.serialize<geo_pb.AddressResponse>
  responseDeserialize: grpc.deserialize<geo_pb.AddressResponse>
}
interface IGeoService_IGetAddresses
  extends grpc.MethodDefinition<
    geo_pb.GetAddressesRequest,
    geo_pb.AddressesResponse
  > {
  path: '/geo.v1.Geo/GetAddresses'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.GetAddressesRequest>
  requestDeserialize: grpc.deserialize<geo_pb.GetAddressesRequest>
  responseSerialize: grpc.serialize<geo_pb.AddressesResponse>
  responseDeserialize: grpc.deserialize<geo_pb.AddressesResponse>
}
interface IGeoService_IGetAddressesByIds
  extends grpc.MethodDefinition<
    geo_pb.GetAddressesRequest,
    geo_pb.AddressesResponse
  > {
  path: '/geo.v1.Geo/GetAddressesByIds'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.GetAddressesRequest>
  requestDeserialize: grpc.deserialize<geo_pb.GetAddressesRequest>
  responseSerialize: grpc.serialize<geo_pb.AddressesResponse>
  responseDeserialize: grpc.deserialize<geo_pb.AddressesResponse>
}
interface IGeoService_IDeleteAddress
  extends grpc.MethodDefinition<
    geo_pb.DeleteAddressRequest,
    geo_pb.DeleteResponse
  > {
  path: '/geo.v1.Geo/DeleteAddress'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<geo_pb.DeleteAddressRequest>
  requestDeserialize: grpc.deserialize<geo_pb.DeleteAddressRequest>
  responseSerialize: grpc.serialize<geo_pb.DeleteResponse>
  responseDeserialize: grpc.deserialize<geo_pb.DeleteResponse>
}

export const GeoService: IGeoService

export interface IGeoServer extends grpc.UntypedServiceImplementation {
  geoLocate: grpc.handleUnaryCall<geo_pb.GeoRequest, geo_pb.GeoResponse>
  addGeoLocation: grpc.handleUnaryCall<
    geo_pb.AddGeoLocationRequest,
    geo_pb.GeoLocationResponse
  >
  getGeoLocation: grpc.handleUnaryCall<
    geo_pb.GetGeoLocationRequest,
    geo_pb.GeoLocationResponse
  >
  getGeoLocations: grpc.handleUnaryCall<
    geo_pb.GetGeoLocationRequest,
    geo_pb.GeoLocationsResponse
  >
  deleteGeoLocation: grpc.handleUnaryCall<
    geo_pb.DeleteGeoLocationRequest,
    geo_pb.DeleteResponse
  >
  getAddressTypes: grpc.handleUnaryCall<
    geo_pb.AddressTypesRequest,
    geo_pb.AddressTypesResponse
  >
  addAddress: grpc.handleUnaryCall<
    geo_pb.AddressRequest,
    geo_pb.AddressResponse
  >
  updateAddress: grpc.handleUnaryCall<
    geo_pb.AddressRequest,
    geo_pb.AddressResponse
  >
  getAddress: grpc.handleUnaryCall<
    geo_pb.GetAddressRequest,
    geo_pb.AddressResponse
  >
  getAddresses: grpc.handleUnaryCall<
    geo_pb.GetAddressesRequest,
    geo_pb.AddressesResponse
  >
  getAddressesByIds: grpc.handleUnaryCall<
    geo_pb.GetAddressesRequest,
    geo_pb.AddressesResponse
  >
  deleteAddress: grpc.handleUnaryCall<
    geo_pb.DeleteAddressRequest,
    geo_pb.DeleteResponse
  >
}

export interface IGeoClient {
  geoLocate(
    request: geo_pb.GeoRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoResponse
    ) => void
  ): grpc.ClientUnaryCall
  geoLocate(
    request: geo_pb.GeoRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoResponse
    ) => void
  ): grpc.ClientUnaryCall
  geoLocate(
    request: geo_pb.GeoRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoResponse
    ) => void
  ): grpc.ClientUnaryCall
  addGeoLocation(
    request: geo_pb.AddGeoLocationRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  addGeoLocation(
    request: geo_pb.AddGeoLocationRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  addGeoLocation(
    request: geo_pb.AddGeoLocationRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  getGeoLocation(
    request: geo_pb.GetGeoLocationRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  getGeoLocation(
    request: geo_pb.GetGeoLocationRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  getGeoLocation(
    request: geo_pb.GetGeoLocationRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  getGeoLocations(
    request: geo_pb.GetGeoLocationRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationsResponse
    ) => void
  ): grpc.ClientUnaryCall
  getGeoLocations(
    request: geo_pb.GetGeoLocationRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationsResponse
    ) => void
  ): grpc.ClientUnaryCall
  getGeoLocations(
    request: geo_pb.GetGeoLocationRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationsResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteGeoLocation(
    request: geo_pb.DeleteGeoLocationRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteGeoLocation(
    request: geo_pb.DeleteGeoLocationRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteGeoLocation(
    request: geo_pb.DeleteGeoLocationRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddressTypes(
    request: geo_pb.AddressTypesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressTypesResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddressTypes(
    request: geo_pb.AddressTypesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressTypesResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddressTypes(
    request: geo_pb.AddressTypesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressTypesResponse
    ) => void
  ): grpc.ClientUnaryCall
  addAddress(
    request: geo_pb.AddressRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  addAddress(
    request: geo_pb.AddressRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  addAddress(
    request: geo_pb.AddressRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  updateAddress(
    request: geo_pb.AddressRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  updateAddress(
    request: geo_pb.AddressRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  updateAddress(
    request: geo_pb.AddressRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddress(
    request: geo_pb.GetAddressRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddress(
    request: geo_pb.GetAddressRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddress(
    request: geo_pb.GetAddressRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddresses(
    request: geo_pb.GetAddressesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddresses(
    request: geo_pb.GetAddressesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddresses(
    request: geo_pb.GetAddressesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddressesByIds(
    request: geo_pb.GetAddressesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddressesByIds(
    request: geo_pb.GetAddressesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  getAddressesByIds(
    request: geo_pb.GetAddressesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteAddress(
    request: geo_pb.DeleteAddressRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteAddress(
    request: geo_pb.DeleteAddressRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteAddress(
    request: geo_pb.DeleteAddressRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
}

export class GeoClient extends grpc.Client implements IGeoClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  )
  public geoLocate(
    request: geo_pb.GeoRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoResponse
    ) => void
  ): grpc.ClientUnaryCall
  public geoLocate(
    request: geo_pb.GeoRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoResponse
    ) => void
  ): grpc.ClientUnaryCall
  public geoLocate(
    request: geo_pb.GeoRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addGeoLocation(
    request: geo_pb.AddGeoLocationRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addGeoLocation(
    request: geo_pb.AddGeoLocationRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addGeoLocation(
    request: geo_pb.AddGeoLocationRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getGeoLocation(
    request: geo_pb.GetGeoLocationRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getGeoLocation(
    request: geo_pb.GetGeoLocationRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getGeoLocation(
    request: geo_pb.GetGeoLocationRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getGeoLocations(
    request: geo_pb.GetGeoLocationRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationsResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getGeoLocations(
    request: geo_pb.GetGeoLocationRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationsResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getGeoLocations(
    request: geo_pb.GetGeoLocationRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.GeoLocationsResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteGeoLocation(
    request: geo_pb.DeleteGeoLocationRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteGeoLocation(
    request: geo_pb.DeleteGeoLocationRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteGeoLocation(
    request: geo_pb.DeleteGeoLocationRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddressTypes(
    request: geo_pb.AddressTypesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressTypesResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddressTypes(
    request: geo_pb.AddressTypesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressTypesResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddressTypes(
    request: geo_pb.AddressTypesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressTypesResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addAddress(
    request: geo_pb.AddressRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addAddress(
    request: geo_pb.AddressRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addAddress(
    request: geo_pb.AddressRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  public updateAddress(
    request: geo_pb.AddressRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  public updateAddress(
    request: geo_pb.AddressRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  public updateAddress(
    request: geo_pb.AddressRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddress(
    request: geo_pb.GetAddressRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddress(
    request: geo_pb.GetAddressRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddress(
    request: geo_pb.GetAddressRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddresses(
    request: geo_pb.GetAddressesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddresses(
    request: geo_pb.GetAddressesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddresses(
    request: geo_pb.GetAddressesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddressesByIds(
    request: geo_pb.GetAddressesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddressesByIds(
    request: geo_pb.GetAddressesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getAddressesByIds(
    request: geo_pb.GetAddressesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.AddressesResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteAddress(
    request: geo_pb.DeleteAddressRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteAddress(
    request: geo_pb.DeleteAddressRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteAddress(
    request: geo_pb.DeleteAddressRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: geo_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
}
