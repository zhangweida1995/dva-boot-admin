export default [
  {
    name: 'id',
    formItem: {
      type: 'hidden',
    },
  },
  {
    title: '新闻标题',
    name: 'newsName',
    formItem: {
      rules: [
        {
          required: true,
          message: '请输入新闻标题',
        },
        {
          pattern: /^[\w\u4E00-\u9FA5()]{1,50}$/,
          message: '新闻标题只能输入1-20个汉字、英文、数字、括号',
        },
      ],
    },
  },
  {
    title: '新闻副标题',
    name: 'subname',
    formItem: {
      rules: [
        {
          pattern: /^[\w\u4E00-\u9FA5()]{1,50}$/,
          message: '角色名只能输入1-20个汉字、英文、数字、括号',
        },
      ],
    },
  },
  {
    title: '作业内容',
    name: 'content',
    formItem: {
      type: 'editor',
      showFullScreen: true,
      height: 600,
      onChange(form, value) {
        console.log(value)
      },
    },
  },
]
