import { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.glob('../layouts/*.vue', { eager: true })
const views = import.meta.glob('../views/**/*.vue', { eager: true })

function getRoutes() {
  const layoutRoutes: RouteRecordRaw[] = []
  Object.entries(layouts).forEach(([path, module]) => {
    const route = getRouteByModule(path, module as any)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

function getRouteByModule(file: string, module: any): RouteRecordRaw {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route: RouteRecordRaw = {
    path: `/${name}`,
    name: name.replace('/', '.'),
    component: module.default
  }
  // return
  return Object.assign(route, module.default.route || {})
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw): RouteRecordRaw[] {
  const children: RouteRecordRaw[] = []
  Object.entries(views).forEach(([path, module]) => {
    if (path.includes(`/${layoutRoute.name as string}/`)) {
      const route = getRouteByModule(path, module as any)
      children.push(route)
    }
  })
  return children
}

export default getRoutes()
