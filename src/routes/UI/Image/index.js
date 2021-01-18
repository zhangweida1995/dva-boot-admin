import { dynamicWrapper, createRoute } from '@/utils/core'

const routesConfig = (app) => {
  return {
    path: '/image',
    title: 'Image page',
    component: dynamicWrapper(app, [], () => import('./components')),
  }
}
export default (app) => createRoute(app, routesConfig)
