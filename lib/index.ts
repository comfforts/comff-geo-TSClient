import type { Point, Address, AddressType, RouteLeg } from './proto/_gen/geo_pb'

export interface ILocation {
  latitude: number
  longitude: number
  formattedAddress?: string
}
export interface IAddress {
  id: string
  refId?: string
  type?: AddressType
  street?: string
  city?: string
  postalCode?: string
  state?: string
  country?: string
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

export const mapAddressesToIAddresses = (addrs: Address[]): IAddress[] => {
  return addrs.map(mapAddressToIAddress)
}

export const mapAddressToIAddress = (addr: Address): IAddress => {
  if (addr === undefined) return addr

  return {
    id: addr.getId(),
    refId: addr.getRefid(),
    type: addr.getType(),
    street: addr.getStreet(),
    city: addr.getCity(),
    postalCode: addr.getPostalcode(),
    state: addr.getState(),
    country: addr.getCountry()
  }
}

export const mapPointToILocation = (pt: Point): ILocation => {
  if (pt === undefined) return pt

  return {
    latitude: pt.getLatitude(),
    longitude: pt.getLongitude(),
    formattedAddress: pt.getFormattedaddress()
  }
}

export const mapRouteLegsToIRoutes = (rts: RouteLeg[]): IRoute[] => {
  return rts.map(mapRouteLegToIRoute)
}

export const mapRouteLegToIRoute = (rt: RouteLeg): IRoute => {
  if (rt === undefined) return rt

  return {
    start: rt.getStart(),
    end: rt.getEnd(),
    startId: rt.getStartid(),
    endId: rt.getEndid(),
    duration: rt.getDuration(),
    distance: rt.getDistance()
  }
}
