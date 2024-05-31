import type { Point, Address, AddressType, RouteLeg } from './proto/_gen/geo_pb'
export interface ILocation {
  latitude: number
  longitude: number
  formattedAddress?: string
}
export interface BaseAddress {
  street?: string
  city?: string
  state?: string
  postalCode: string
  country: string
}
export interface IAddress extends BaseAddress {
  id: string
  refId?: string
  type?: AddressType
}
export interface GeoLocationParams {
  latitude: number
  longitude: number
  postalCode?: string
  country?: string
  street?: string
  city?: string
  state?: string
}
export interface TypesResponse {
  types?: AddressType[]
  error?: Error
}
export interface GeoLocationResponse {
  point?: ILocation
  error?: Error
}
export interface AddAddressRequest {
  address: IAddress
  requestedBy: string
}
export interface AddrResponse {
  address?: IAddress
  error?: Error
}
export interface AddrsResponse {
  addresses?: IAddress[]
  error?: Error
}
export interface OkResponse {
  ok: boolean
  error?: Error
}
export interface IRoute {
  start: string
  end: string
  duration: number
  distance: number
  startId: string
  endId: string
}
export interface AddressRouteParams {
  originIds: string[]
  destIds: string[]
}
export interface IRoutesResponse {
  routes?: IRoute[]
  error?: Error
}
export interface GeoServiceClient {
  getTypes: () => Promise<TypesResponse>
  geoLocate: (loc: ILocation) => Promise<GeoLocationResponse>
  addAddress: (addReq: AddAddressRequest) => Promise<AddrResponse>
  getAddress: (id: string) => Promise<AddrResponse>
  deleteAddress: (id: string) => Promise<OkResponse>
  getAddressesByIds: (ids: string[]) => Promise<AddrsResponse>
  getAddressRoute: (ids: string[]) => Promise<IRoutesResponse>
  closeClient: () => Error | undefined
}
export declare const mapAddressesToIAddresses: (addrs: Address[]) => IAddress[]
export declare const mapAddressToIAddress: (addr: Address) => IAddress
export declare const mapPointToILocation: (pt: Point) => ILocation
export declare const mapRouteLegsToIRoutes: (rts: RouteLeg[]) => IRoute[]
export declare const mapRouteLegToIRoute: (rt: RouteLeg) => IRoute
