import React from 'react'
import DataTable from 'components/DataTable'
import Icon from 'components/Icon'
import Button from 'components//Button'
import { router } from 'dva'
const { Link } = router

export default (self, employees) => {
  return [
    {
      title: '新闻标题',
      name: 'newsName',
      tableItem: {}, //表格布局
      searchItem: {
        //搜索框
        group: 'abc',
      },
      formItem: {
        rules: [
          {
            required: true,
            message: '请输入新闻标题',
          },
        ],
      }, //表单
    },
    {
      title: '新闻副标题',
      name: 'subname',
      tableItem: {},
      formItem: {},
    },
    {
      title: '新闻描述',
      name: 'descript',
      tableItem: {},
    },
    {
      title: '创建时间',
      name: 'createTime',
      tableItem: {},
      searchItem: {
        type: 'datetime',
      },
    },
    {
      title: '更新时间',
      name: 'updateTime',
      tableItem: {},
      searchItem: {
        type: 'datetime',
      },
    },
    {
      title: '创建人',
      name: 'workEmployee',
      dict: employees,
      tableItem: {
        render: (text) => text.map((item) => item.title).join(','),
      },
      formItem: {
        type: 'select',
        mode: 'multiple',
      },
      searchItem: {
        type: 'select',
      },
    },
    {
      title: '操作',
      tableItem: {
        width: 180,
        render: (text, record) => (
          <DataTable.Oper>
            <Button tooltip="修改" onClick={(e) => self.onUpdate(record)}>
              <Icon type="edit" />
            </Button>
            <Button tooltip="删除" onClick={(e) => self.onDelete(record)}>
              <Icon type="trash" />
            </Button>
            <Button tooltip="跳转到新路由">
              <Link to={'/newsManage/detail?id=' + record.id}>
                <Icon type="LinkOutlined" antd />
              </Link>
            </Button>
          </DataTable.Oper>
        ),
      },
    },
  ]
}
