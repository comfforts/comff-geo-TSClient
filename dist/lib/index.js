'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.mapRouteLegToIRoute =
  exports.mapRouteLegsToIRoutes =
  exports.mapPointToILocation =
  exports.mapAddressToIAddress =
  exports.mapAddressesToIAddresses =
    void 0
const mapAddressesToIAddresses = (addrs) => {
  return addrs.map(exports.mapAddressToIAddress)
}
exports.mapAddressesToIAddresses = mapAddressesToIAddresses
const mapAddressToIAddress = (addr) => {
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
exports.mapAddressToIAddress = mapAddressToIAddress
const mapPointToILocation = (pt) => {
  if (pt === undefined) return pt
  return {
    latitude: pt.getLatitude(),
    longitude: pt.getLongitude(),
    formattedAddress: pt.getFormattedaddress()
  }
}
exports.mapPointToILocation = mapPointToILocation
const mapRouteLegsToIRoutes = (rts) => {
  return rts.map(exports.mapRouteLegToIRoute)
}
exports.mapRouteLegsToIRoutes = mapRouteLegsToIRoutes
const mapRouteLegToIRoute = (rt) => {
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
exports.mapRouteLegToIRoute = mapRouteLegToIRoute
