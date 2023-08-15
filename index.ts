export { AddressType } from './lib/proto/_gen/geo_pb'

export type {
  ILocation,
  GeoLocationResponse,
  TypesResponse,
  AddAddressRequest,
  AddrResponse,
  OkResponse,
  AddrsResponse,
  IRoutesResponse,
  GeoServiceClient
} from './lib'

export { getTypes } from './lib/get-types'
export { geoLocate } from './lib/geo-locate'
export { addAddress } from './lib/add-address'
export { getAddress } from './lib/get-address'
export { deleteAddress } from './lib/delete-address'
export { getAddressesByIds } from './lib/get-addresses-by-ids'
export { getAddressRoute } from './lib/get-address-route'
export { closeClient } from './lib/close-client'
