export var mapAddressesToIAddresses = function (addrs) {
    return addrs.map(mapAddressToIAddress);
};
export var mapAddressToIAddress = function (addr) {
    if (addr === undefined)
        return addr;
    return {
        id: addr.getId(),
        refId: addr.getRefid(),
        type: addr.getType(),
        street: addr.getStreet(),
        city: addr.getCity(),
        postalCode: addr.getPostalcode(),
        state: addr.getState(),
        country: addr.getCountry()
    };
};
export var mapPointToILocation = function (pt) {
    if (pt === undefined)
        return pt;
    return {
        latitude: pt.getLatitude(),
        longitude: pt.getLongitude(),
        formattedAddress: pt.getFormattedaddress()
    };
};
export var mapRouteLegsToIRoutes = function (rts) {
    return rts.map(mapRouteLegToIRoute);
};
export var mapRouteLegToIRoute = function (rt) {
    if (rt === undefined)
        return rt;
    return {
        start: rt.getStart(),
        end: rt.getEnd(),
        startId: rt.getStartid(),
        endId: rt.getEndid(),
        duration: rt.getDuration(),
        distance: rt.getDistance()
    };
};
