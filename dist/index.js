'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.closeClient =
  exports.getAddressRoute =
  exports.getAddressesByIds =
  exports.deleteAddress =
  exports.getAddress =
  exports.addAddress =
  exports.geoLocate =
  exports.getTypes =
  exports.AddressType =
    void 0
var geo_pb_1 = require('./lib/proto/_gen/geo_pb')
Object.defineProperty(exports, 'AddressType', {
  enumerable: true,
  get: function () {
    return geo_pb_1.AddressType
  }
})
var get_types_1 = require('./lib/get-types')
Object.defineProperty(exports, 'getTypes', {
  enumerable: true,
  get: function () {
    return get_types_1.getTypes
  }
})
var geo_locate_1 = require('./lib/geo-locate')
Object.defineProperty(exports, 'geoLocate', {
  enumerable: true,
  get: function () {
    return geo_locate_1.geoLocate
  }
})
var add_address_1 = require('./lib/add-address')
Object.defineProperty(exports, 'addAddress', {
  enumerable: true,
  get: function () {
    return add_address_1.addAddress
  }
})
var get_address_1 = require('./lib/get-address')
Object.defineProperty(exports, 'getAddress', {
  enumerable: true,
  get: function () {
    return get_address_1.getAddress
  }
})
var delete_address_1 = require('./lib/delete-address')
Object.defineProperty(exports, 'deleteAddress', {
  enumerable: true,
  get: function () {
    return delete_address_1.deleteAddress
  }
})
var get_addresses_by_ids_1 = require('./lib/get-addresses-by-ids')
Object.defineProperty(exports, 'getAddressesByIds', {
  enumerable: true,
  get: function () {
    return get_addresses_by_ids_1.getAddressesByIds
  }
})
var get_address_route_1 = require('./lib/get-address-route')
Object.defineProperty(exports, 'getAddressRoute', {
  enumerable: true,
  get: function () {
    return get_address_route_1.getAddressRoute
  }
})
var close_client_1 = require('./lib/close-client')
Object.defineProperty(exports, 'closeClient', {
  enumerable: true,
  get: function () {
    return close_client_1.closeClient
  }
})
