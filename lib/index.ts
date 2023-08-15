import type { Point, Address, RouteLeg } from './proto/_gen/geo_pb'

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
