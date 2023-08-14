import { getTypes } from './get-types'
import { geoLocate } from './geo-locate'

describe('geo client', () => {
  test('getTypes', async () => {
    const resp = await getTypes()
    expect(resp.types?.length).toEqual(5)
  })

  test('geoLocate', async () => {
    let resp = await geoLocate({
      postalCode: '89104',
      country: 'US',
      longitude: 0,
      latitude: 0
    })
    expect(resp.point).not.toEqual(null)
    expect(resp.point?.formattedAddress).toEqual('Las Vegas, NV 89104, USA')

    resp = await geoLocate({
      postalCode: '89104',
      country: 'US',
      street: '1455 S Lamb Blvd',
      city: 'Las Vegas',
      state: 'NV',
      longitude: 0,
      latitude: 0
    })
    expect(resp.point).not.toEqual(null)
    expect(resp.point?.formattedAddress).toEqual(
      '1455 S Lamb Blvd, Las Vegas, NV 89104, USA'
    )

    if (
      resp.point?.latitude !== undefined &&
      resp.point?.latitude !== 0 &&
      resp.point?.longitude !== undefined &&
      resp.point?.latitude !== 0
    ) {
      resp = await geoLocate({
        latitude: resp.point?.latitude,
        longitude: resp.point?.longitude
      })
      expect(resp.point).not.toEqual(null)
      expect(resp.point?.formattedAddress).toEqual(
        '1455 S Lamb Blvd, Las Vegas, NV 89104, USA'
      )
    }
  })
})
