import { dynamicWrapper, createRoute } from '@/utils/core'

const routesConfig = (app) => ({
  path: '/newsManage/detail',
  title: '编辑新闻',
  component: dynamicWrapper(app, [import('./model')], () =>
    import('./components')
  ),
})

export default (app) => createRoute(app, routesConfig)
