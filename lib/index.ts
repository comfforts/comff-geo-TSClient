import type { Point, Address } from './proto/_gen/geo_pb'

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
