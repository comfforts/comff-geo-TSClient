const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

describe('test functions', () => {
  test('buildSet', () => {
    const res = buildSet(3)
    console.log('result: ', res)
  })

  test('shortest', () => {
    const set = buildSet(4)
    const res = shortest(set)
    console.log('result: ', res)
  })
})

enum NType {
  Start = 'START',
  Dstart = 'DSTART',
  Dend = 'DEND'
}

interface Groute {
  start: string
  end: string
  distance: number
  time: number
}

interface Gnode {
  type: NType
  id: string
}

const buildSet = (
  numDels: number
): {
  start: Gnode
  gNodeMap: Record<string, Gnode>
  dels: Array<[Gnode, Gnode]>
  routes: Groute[]
} => {
  const distMap: Record<string, number> = {}

  const start = { id: 's', type: NType.Start }
  const gNodeMap: Record<string, Gnode> = {
    [start.id]: start
  }

  for (let i = 0; i < numDels; i++) {
    distMap[`s-s${i + 1}`] = getRandomInt(3, 23)
    distMap[`s-e${i + 1}`] = getRandomInt(3, 23)
  }

  const dels: Array<[Gnode, Gnode]> = []
  for (let i = 0; i < numDels; i++) {
    const s = { id: `s${i + 1}`, type: NType.Dstart }
    const e = { id: `e${i + 1}`, type: NType.Dend }
    gNodeMap[s.id] = s
    gNodeMap[e.id] = e
    dels.push([s, e])

    for (let j = 0; j < numDels; j++) {
      // s - s
      if (distMap[`s${i + 1}-s${j + 1}`] === undefined && i !== j) {
        distMap[`s${i + 1}-s${j + 1}`] = getRandomInt(3, 23)
        distMap[`s${j + 1}-s${i + 1}`] = distMap[`s${i + 1}-s${j + 1}`]
      }

      // s - e
      if (distMap[`s${i + 1}-e${j + 1}`] === undefined) {
        if (distMap[`e${j + 1}-s${i + 1}`] === undefined) {
          distMap[`s${i + 1}-e${j + 1}`] = getRandomInt(3, 23)
        } else {
          distMap[`s${i + 1}-e${j + 1}`] = distMap[`e${j + 1}-s${i + 1}`]
        }
      }

      // e - s
      if (distMap[`e${i + 1}-s${j + 1}`] === undefined) {
        if (distMap[`s${j + 1}-e${i + 1}`] === undefined) {
          distMap[`e${i + 1}-s${j + 1}`] = getRandomInt(3, 23)
        } else {
          distMap[`e${i + 1}-s${j + 1}`] = distMap[`s${j + 1}-e${i + 1}`]
        }
      }

      // e - e
      if (distMap[`e${i + 1}-e${j + 1}`] === undefined && i !== j) {
        distMap[`e${i + 1}-e${j + 1}`] = getRandomInt(3, 23)
        distMap[`e${j + 1}-e${i + 1}`] = distMap[`e${i + 1}-e${j + 1}`]
      }
    }
  }

  const keys = Object.keys(distMap)
  const routes: Groute[] = []
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const [start, end] = key.split('-')
    routes.push({
      distance: distMap[key],
      time: distMap[key] + 3,
      start,
      end
    })
  }

  return {
    start,
    gNodeMap,
    dels,
    routes
  }
}

const shortest = ({
  start,
  gNodeMap,
  dels,
  routes
}: {
  start: Gnode
  gNodeMap: Record<string, Gnode>
  dels: Array<[Gnode, Gnode]>
  routes: Groute[]
}): Groute[] => {
  const retRoutes: Groute[] = []
  // get filtered list of start routes, where destination is a pickup point
  const sortedStartDests = routes
    .filter(
      (r) => r.start === start.id && gNodeMap[r.end].type === NType.Dstart
    )
    .sort((a, b) => a.distance - b.distance)

  // starting route
  retRoutes.push(sortedStartDests[0])

  // initialize && build start & end maps to end & start
  const startMap: Record<string, string> = {}
  const endMap: Record<string, string> = {}
  for (let i = 0; i < dels.length; i++) {
    startMap[dels[i][0].id] = dels[i][1].id
    endMap[dels[i][1].id] = dels[i][0].id
  }

  // initialize sorted routes map, mapped by point id
  const sortedRouteMap: Record<string, Groute[]> = {}
  // initialize point visited map, mapped by point id
  const visited: Record<string, boolean> = {}

  let i = 0
  let next = sortedStartDests[0].end
  while (i < dels.length * 2 - 1) {
    visited[next] = true
    if (sortedRouteMap[next] === undefined) {
      sortedRouteMap[next] = routes
        .filter((r) => r.start === next)
        .sort((a, b) => a.distance - b.distance)
    }

    let j = 0
    const currRoutes = sortedRouteMap[next]
    while (j < currRoutes.length) {
      let routeAdded = false
      const currRoute = currRoutes[j]

      // if not visited
      if (!visited[currRoute.end]) {
        const gNode = gNodeMap[currRoute.end]
        // if a pickup or a destination where pickup was already visited
        if (
          gNode.type === NType.Dstart ||
          (gNode.type === NType.Dend && visited[endMap[gNode.id]])
        ) {
          retRoutes.push(currRoute)
          next = currRoute.end
          routeAdded = true
        }
      }
      if (routeAdded) break

      if (!routeAdded && j === currRoutes.length - 1) {
        retRoutes.push(currRoute)
        next = currRoute.end
        routeAdded = true
      }
      j++
    }
    i++
  }
  return retRoutes
}
