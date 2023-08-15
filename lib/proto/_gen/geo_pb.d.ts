// package: geo.v1
// file: geo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf'

export class Point extends jspb.Message {
  getLatitude(): number
  setLatitude(value: number): Point
  getLongitude(): number
  setLongitude(value: number): Point
  getFormattedaddress(): string
  setFormattedaddress(value: string): Point

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Point.AsObject
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: Point,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): Point
  static deserializeBinaryFromReader(
    message: Point,
    reader: jspb.BinaryReader
  ): Point
}

export namespace Point {
  export type AsObject = {
    latitude: number
    longitude: number
    formattedaddress: string
  }
}

export class GeoRequest extends jspb.Message {
  getPostalcode(): string
  setPostalcode(value: string): GeoRequest
  getCountry(): string
  setCountry(value: string): GeoRequest
  getStreet(): string
  setStreet(value: string): GeoRequest
  getCity(): string
  setCity(value: string): GeoRequest
  getState(): string
  setState(value: string): GeoRequest
  getLatitude(): number
  setLatitude(value: number): GeoRequest
  getLongitude(): number
  setLongitude(value: number): GeoRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GeoRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GeoRequest
  ): GeoRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GeoRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GeoRequest
  static deserializeBinaryFromReader(
    message: GeoRequest,
    reader: jspb.BinaryReader
  ): GeoRequest
}

export namespace GeoRequest {
  export type AsObject = {
    postalcode: string
    country: string
    street: string
    city: string
    state: string
    latitude: number
    longitude: number
  }
}

export class GeoResponse extends jspb.Message {
  hasPoint(): boolean
  clearPoint(): void
  getPoint(): Point | undefined
  setPoint(value?: Point): GeoResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GeoResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GeoResponse
  ): GeoResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GeoResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GeoResponse
  static deserializeBinaryFromReader(
    message: GeoResponse,
    reader: jspb.BinaryReader
  ): GeoResponse
}

export namespace GeoResponse {
  export type AsObject = {
    point?: Point.AsObject
  }
}

export class GeoLocation extends jspb.Message {
  getHash(): string
  setHash(value: string): GeoLocation
  getId(): string
  setId(value: string): GeoLocation

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GeoLocation.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GeoLocation
  ): GeoLocation.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GeoLocation,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GeoLocation
  static deserializeBinaryFromReader(
    message: GeoLocation,
    reader: jspb.BinaryReader
  ): GeoLocation
}

export namespace GeoLocation {
  export type AsObject = {
    hash: string
    id: string
  }
}

export class AddGeoLocationRequest extends jspb.Message {
  getId(): string
  setId(value: string): AddGeoLocationRequest
  getHash(): string
  setHash(value: string): AddGeoLocationRequest
  getLongitude(): number
  setLongitude(value: number): AddGeoLocationRequest
  getLatitude(): number
  setLatitude(value: number): AddGeoLocationRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddGeoLocationRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: AddGeoLocationRequest
  ): AddGeoLocationRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: AddGeoLocationRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): AddGeoLocationRequest
  static deserializeBinaryFromReader(
    message: AddGeoLocationRequest,
    reader: jspb.BinaryReader
  ): AddGeoLocationRequest
}

export namespace AddGeoLocationRequest {
  export type AsObject = {
    id: string
    hash: string
    longitude: number
    latitude: number
  }
}

export class GetGeoLocationRequest extends jspb.Message {
  getId(): string
  setId(value: string): GetGeoLocationRequest
  getHash(): string
  setHash(value: string): GetGeoLocationRequest
  getLongitude(): number
  setLongitude(value: number): GetGeoLocationRequest
  getLatitude(): number
  setLatitude(value: number): GetGeoLocationRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetGeoLocationRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GetGeoLocationRequest
  ): GetGeoLocationRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GetGeoLocationRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GetGeoLocationRequest
  static deserializeBinaryFromReader(
    message: GetGeoLocationRequest,
    reader: jspb.BinaryReader
  ): GetGeoLocationRequest
}

export namespace GetGeoLocationRequest {
  export type AsObject = {
    id: string
    hash: string
    longitude: number
    latitude: number
  }
}

export class GeoLocationResponse extends jspb.Message {
  getOk(): boolean
  setOk(value: boolean): GeoLocationResponse

  hasLocation(): boolean
  clearLocation(): void
  getLocation(): GeoLocation | undefined
  setLocation(value?: GeoLocation): GeoLocationResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GeoLocationResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GeoLocationResponse
  ): GeoLocationResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GeoLocationResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GeoLocationResponse
  static deserializeBinaryFromReader(
    message: GeoLocationResponse,
    reader: jspb.BinaryReader
  ): GeoLocationResponse
}

export namespace GeoLocationResponse {
  export type AsObject = {
    ok: boolean
    location?: GeoLocation.AsObject
  }
}

export class GeoLocationsResponse extends jspb.Message {
  getOk(): boolean
  setOk(value: boolean): GeoLocationsResponse
  clearLocationsList(): void
  getLocationsList(): Array<GeoLocation>
  setLocationsList(value: Array<GeoLocation>): GeoLocationsResponse
  addLocations(value?: GeoLocation, index?: number): GeoLocation

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GeoLocationsResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GeoLocationsResponse
  ): GeoLocationsResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GeoLocationsResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GeoLocationsResponse
  static deserializeBinaryFromReader(
    message: GeoLocationsResponse,
    reader: jspb.BinaryReader
  ): GeoLocationsResponse
}

export namespace GeoLocationsResponse {
  export type AsObject = {
    ok: boolean
    locationsList: Array<GeoLocation.AsObject>
  }
}

export class DeleteGeoLocationRequest extends jspb.Message {
  getId(): string
  setId(value: string): DeleteGeoLocationRequest
  getHash(): string
  setHash(value: string): DeleteGeoLocationRequest
  getLongitude(): number
  setLongitude(value: number): DeleteGeoLocationRequest
  getLatitude(): number
  setLatitude(value: number): DeleteGeoLocationRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeleteGeoLocationRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: DeleteGeoLocationRequest
  ): DeleteGeoLocationRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: DeleteGeoLocationRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): DeleteGeoLocationRequest
  static deserializeBinaryFromReader(
    message: DeleteGeoLocationRequest,
    reader: jspb.BinaryReader
  ): DeleteGeoLocationRequest
}

export namespace DeleteGeoLocationRequest {
  export type AsObject = {
    id: string
    hash: string
    longitude: number
    latitude: number
  }
}

export class DeleteResponse extends jspb.Message {
  getOk(): boolean
  setOk(value: boolean): DeleteResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeleteResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: DeleteResponse
  ): DeleteResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: DeleteResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): DeleteResponse
  static deserializeBinaryFromReader(
    message: DeleteResponse,
    reader: jspb.BinaryReader
  ): DeleteResponse
}

export namespace DeleteResponse {
  export type AsObject = {
    ok: boolean
  }
}

export class Address extends jspb.Message {
  getId(): string
  setId(value: string): Address
  getRefid(): string
  setRefid(value: string): Address
  getType(): AddressType
  setType(value: AddressType): Address
  getStreet(): string
  setStreet(value: string): Address
  getCity(): string
  setCity(value: string): Address
  getPostalcode(): string
  setPostalcode(value: string): Address
  getState(): string
  setState(value: string): Address
  getCountry(): string
  setCountry(value: string): Address

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Address.AsObject
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: Address,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): Address
  static deserializeBinaryFromReader(
    message: Address,
    reader: jspb.BinaryReader
  ): Address
}

export namespace Address {
  export type AsObject = {
    id: string
    refid: string
    type: AddressType
    street: string
    city: string
    postalcode: string
    state: string
    country: string
  }
}

export class AddressTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressTypesRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: AddressTypesRequest
  ): AddressTypesRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: AddressTypesRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): AddressTypesRequest
  static deserializeBinaryFromReader(
    message: AddressTypesRequest,
    reader: jspb.BinaryReader
  ): AddressTypesRequest
}

export namespace AddressTypesRequest {
  export type AsObject = {}
}

export class AddressTypesResponse extends jspb.Message {
  clearAddresstypesList(): void
  getAddresstypesList(): Array<AddressType>
  setAddresstypesList(value: Array<AddressType>): AddressTypesResponse
  addAddresstypes(value: AddressType, index?: number): AddressType

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressTypesResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: AddressTypesResponse
  ): AddressTypesResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: AddressTypesResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): AddressTypesResponse
  static deserializeBinaryFromReader(
    message: AddressTypesResponse,
    reader: jspb.BinaryReader
  ): AddressTypesResponse
}

export namespace AddressTypesResponse {
  export type AsObject = {
    addresstypesList: Array<AddressType>
  }
}

export class AddressRequest extends jspb.Message {
  getRefid(): string
  setRefid(value: string): AddressRequest
  getType(): AddressType
  setType(value: AddressType): AddressRequest
  getStreet(): string
  setStreet(value: string): AddressRequest
  getCity(): string
  setCity(value: string): AddressRequest
  getPostalcode(): string
  setPostalcode(value: string): AddressRequest
  getState(): string
  setState(value: string): AddressRequest
  getCountry(): string
  setCountry(value: string): AddressRequest
  getRequestedby(): string
  setRequestedby(value: string): AddressRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: AddressRequest
  ): AddressRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: AddressRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): AddressRequest
  static deserializeBinaryFromReader(
    message: AddressRequest,
    reader: jspb.BinaryReader
  ): AddressRequest
}

export namespace AddressRequest {
  export type AsObject = {
    refid: string
    type: AddressType
    street: string
    city: string
    postalcode: string
    state: string
    country: string
    requestedby: string
  }
}

export class GetAddressRequest extends jspb.Message {
  getId(): string
  setId(value: string): GetAddressRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetAddressRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GetAddressRequest
  ): GetAddressRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GetAddressRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GetAddressRequest
  static deserializeBinaryFromReader(
    message: GetAddressRequest,
    reader: jspb.BinaryReader
  ): GetAddressRequest
}

export namespace GetAddressRequest {
  export type AsObject = {
    id: string
  }
}

export class GetAddressesRequest extends jspb.Message {
  getRefid(): string
  setRefid(value: string): GetAddressesRequest
  clearAddressidsList(): void
  getAddressidsList(): Array<string>
  setAddressidsList(value: Array<string>): GetAddressesRequest
  addAddressids(value: string, index?: number): string
  getType(): AddressType
  setType(value: AddressType): GetAddressesRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetAddressesRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GetAddressesRequest
  ): GetAddressesRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GetAddressesRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GetAddressesRequest
  static deserializeBinaryFromReader(
    message: GetAddressesRequest,
    reader: jspb.BinaryReader
  ): GetAddressesRequest
}

export namespace GetAddressesRequest {
  export type AsObject = {
    refid: string
    addressidsList: Array<string>
    type: AddressType
  }
}

export class AddressResponse extends jspb.Message {
  getOk(): boolean
  setOk(value: boolean): AddressResponse

  hasAddress(): boolean
  clearAddress(): void
  getAddress(): Address | undefined
  setAddress(value?: Address): AddressResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: AddressResponse
  ): AddressResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: AddressResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): AddressResponse
  static deserializeBinaryFromReader(
    message: AddressResponse,
    reader: jspb.BinaryReader
  ): AddressResponse
}

export namespace AddressResponse {
  export type AsObject = {
    ok: boolean
    address?: Address.AsObject
  }
}

export class AddressesResponse extends jspb.Message {
  getOk(): boolean
  setOk(value: boolean): AddressesResponse
  clearAddressesList(): void
  getAddressesList(): Array<Address>
  setAddressesList(value: Array<Address>): AddressesResponse
  addAddresses(value?: Address, index?: number): Address

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressesResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: AddressesResponse
  ): AddressesResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: AddressesResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): AddressesResponse
  static deserializeBinaryFromReader(
    message: AddressesResponse,
    reader: jspb.BinaryReader
  ): AddressesResponse
}

export namespace AddressesResponse {
  export type AsObject = {
    ok: boolean
    addressesList: Array<Address.AsObject>
  }
}

export class DeleteAddressRequest extends jspb.Message {
  getId(): string
  setId(value: string): DeleteAddressRequest
  getRefid(): string
  setRefid(value: string): DeleteAddressRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeleteAddressRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: DeleteAddressRequest
  ): DeleteAddressRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: DeleteAddressRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): DeleteAddressRequest
  static deserializeBinaryFromReader(
    message: DeleteAddressRequest,
    reader: jspb.BinaryReader
  ): DeleteAddressRequest
}

export namespace DeleteAddressRequest {
  export type AsObject = {
    id: string
    refid: string
  }
}

export class RouteLeg extends jspb.Message {
  getStart(): string
  setStart(value: string): RouteLeg
  getEnd(): string
  setEnd(value: string): RouteLeg
  getDuration(): number
  setDuration(value: number): RouteLeg
  getDistance(): number
  setDistance(value: number): RouteLeg
  getStartid(): string
  setStartid(value: string): RouteLeg
  getEndid(): string
  setEndid(value: string): RouteLeg

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RouteLeg.AsObject
  static toObject(includeInstance: boolean, msg: RouteLeg): RouteLeg.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: RouteLeg,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): RouteLeg
  static deserializeBinaryFromReader(
    message: RouteLeg,
    reader: jspb.BinaryReader
  ): RouteLeg
}

export namespace RouteLeg {
  export type AsObject = {
    start: string
    end: string
    duration: number
    distance: number
    startid: string
    endid: string
  }
}

export class GeoRouteRequest extends jspb.Message {
  clearOriginsList(): void
  getOriginsList(): Array<GeoRequest>
  setOriginsList(value: Array<GeoRequest>): GeoRouteRequest
  addOrigins(value?: GeoRequest, index?: number): GeoRequest
  clearDestinationsList(): void
  getDestinationsList(): Array<GeoRequest>
  setDestinationsList(value: Array<GeoRequest>): GeoRouteRequest
  addDestinations(value?: GeoRequest, index?: number): GeoRequest
  getIslatlng(): boolean
  setIslatlng(value: boolean): GeoRouteRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GeoRouteRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GeoRouteRequest
  ): GeoRouteRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GeoRouteRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GeoRouteRequest
  static deserializeBinaryFromReader(
    message: GeoRouteRequest,
    reader: jspb.BinaryReader
  ): GeoRouteRequest
}

export namespace GeoRouteRequest {
  export type AsObject = {
    originsList: Array<GeoRequest.AsObject>
    destinationsList: Array<GeoRequest.AsObject>
    islatlng: boolean
  }
}

export class AddressRouteRequest extends jspb.Message {
  clearOriginsList(): void
  getOriginsList(): Array<string>
  setOriginsList(value: Array<string>): AddressRouteRequest
  addOrigins(value: string, index?: number): string
  clearDestinationsList(): void
  getDestinationsList(): Array<string>
  setDestinationsList(value: Array<string>): AddressRouteRequest
  addDestinations(value: string, index?: number): string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressRouteRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: AddressRouteRequest
  ): AddressRouteRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: AddressRouteRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): AddressRouteRequest
  static deserializeBinaryFromReader(
    message: AddressRouteRequest,
    reader: jspb.BinaryReader
  ): AddressRouteRequest
}

export namespace AddressRouteRequest {
  export type AsObject = {
    originsList: Array<string>
    destinationsList: Array<string>
  }
}

export class RouteResponse extends jspb.Message {
  getOk(): boolean
  setOk(value: boolean): RouteResponse
  clearRoutelegsList(): void
  getRoutelegsList(): Array<RouteLeg>
  setRoutelegsList(value: Array<RouteLeg>): RouteResponse
  addRoutelegs(value?: RouteLeg, index?: number): RouteLeg

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RouteResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: RouteResponse
  ): RouteResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: RouteResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): RouteResponse
  static deserializeBinaryFromReader(
    message: RouteResponse,
    reader: jspb.BinaryReader
  ): RouteResponse
}

export namespace RouteResponse {
  export type AsObject = {
    ok: boolean
    routelegsList: Array<RouteLeg.AsObject>
  }
}

export enum AddressType {
  SHOP = 0,
  ORG = 1,
  PROFILE = 2,
  COURIER = 3,
  GEO = 4
}
