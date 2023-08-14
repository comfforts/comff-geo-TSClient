import type { AddressType } from '../lib/proto/_gen/geo_pb'

export {}
declare global {
  interface ILocation {
    latitude: number
    longitude: number
    formattedAddress?: string
  }
  interface IAddress {
    id: string
    refId?: string
    type?: AddressType
    street?: string
    city?: string
    postalCode?: string
    state?: string
    country?: string
  }

  interface GeoLocationParams {
    latitude: number
    longitude: number
    postalCode?: string
    country?: string
    street?: string
    city?: string
    state?: string
  }

  interface TypesResponse {
    types?: AddressType[]
    error?: Error
  }

  interface GeoLocationResponse {
    point?: ILocation
    error?: Error
  }

  interface AddrResponse {
    address?: IAddress
    error?: Error
  }

  interface AddrsResponse {
    addresses?: IAddress[]
    error?: Error
  }

  interface OkResponse {
    ok: boolean
    error?: Error
  }
}
