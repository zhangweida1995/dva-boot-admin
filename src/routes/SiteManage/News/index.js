import { dynamicWrapper, createRoute } from '@/utils/core'

const routesConfig = (app) => {
  return {
    path: '/newsManage',
    title: '新闻管理',
    component: dynamicWrapper(app, [import('./model')], () =>
      import('./components')
    ),
    exact: true,
  }
}
export default (app) => createRoute(app, routesConfig)
