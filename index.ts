export { getTypes } from './lib/get-types'
export { geoLocate } from './lib/geo-locate'

export interface GeoServiceClient {
  getTypes: () => Promise<TypesResponse>
  getAddress: (id: string) => Promise<AddrResponse>
  getAddressesByIds: (ids: string[]) => Promise<AddrsResponse>
  geoLocate: (loc: ILocation) => Promise<GeoLocationResponse>
  closeClient: () => void
}
