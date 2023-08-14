export { getTypes } from './lib/get-types'
export { geoLocate } from './lib/geo-locate'
export { addAddress } from './lib/add-address'
export { getAddress } from './lib/get-address'
export { deleteAddress } from './lib/delete-address'
export { getAddressesByIds } from './lib/get-addresses-by-ids'
export { getAddressRoute } from './lib/get-address-route'
export { closeClient } from './lib/close-client'

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
