export default [
  {
    name: '仪表盘',
    icon: 'DashboardOutlined',
    path: '/dashboard',
  },
  {
    name: '组件',
    icon: 'DesktopOutlined',
    path: '/component',
    children: [
      {
        name: '工具条',
        path: '/toolbar',
      },
      {
        name: 'BaseComponent',
        path: '/baseComponent',
      },
      {
        name: 'Columns',
        path: '/column',
      },
      {
        name: '搜索条',
        path: '/searchBar',
      },
      {
        name: '数据表格',
        path: '/datatable',
      },
      {
        name: '表单',
        path: '/form',
      },
      {
        name: '穿梭树',
        path: '/transferTree',
      },
      {
        name: '图表',
        path: '/charts',
        children: [
          {
            name: 'ECharts',
            path: '/charts/ec',
          },
          {
            name: 'G2',
            path: '/charts/g2',
          },
        ],
      },
      {
        name: '打印',
        path: '/print',
      },
      {
        name: 'Banner 管理',
        path: '/banner',
      },
    ],
  },
  {
    name: 'UI元素',
    icon: 'ShareAltOutlined',
    path: '/ui',
    children: [
      {
        name: '按钮',
        path: '/button',
      },
      {
        name: '图片',
        path: '/image',
      },
      {
        name: '消息',
        path: '/alerts',
      },
      {
        name: '动画',
        path: '/animations',
      },
      {
        name: '图标',
        path: '/icons',
      },
      {
        name: '富文本',
        path: '/editor',
      },
      {
        name: '模态窗',
        path: '/modal',
      },
      {
        name: '遮罩',
        path: '/mask',
      },
    ],
  },
  {
    name: '页面',
    icon: 'BookOutlined',
    path: '/page',
    children: [
      {
        name: '登录页',
        path: '/sign/login',
      },
      {
        name: '注册页',
        path: '/sign/register',
      },
      {
        name: '锁屏',
        path: '/lock',
      },
      {
        name: '画廊',
        path: '/gallery',
      },
      {
        name: '空白页',
        path: '/blank',
      },
      {
        name: '结果页',
        path: '/result',
      },
      {
        name: 'Coming Soon',
        path: '/coming',
      },
      {
        name: '403',
        path: '/403',
      },
      {
        name: '404',
        path: '/404',
      },
      {
        name: '500',
        path: '/500',
      },
      {
        name: '多级路由',
        path: '/level-route/:sub?',
      },
    ],
  },
  {
    name: '通用场景',
    icon: 'BulbOutlined',
    path: '/business',
    children: [
      {
        name: 'CRUD',
        path: '/crud/:detail?',
      },
    ],
  },
  {
    name: '网站管理',
    icon: 'BulbOutlined',
    path: '/siteManage',
    children: [
      {
        name: '新闻管理',
        path: '/newsManage/:detail?',
      },
    ],
  },
]
