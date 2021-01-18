/**
 * 模拟CRUD数据
 */
export default ({ fetchMock, delay, mock, toSuccess, toError }) => {
  return {
    // 表格带分页
    '/api/news/getList': (options) => {
      const body = JSON.parse(options.body)
      const currentPage = body.currentPage
      const idbase = (currentPage - 1) * 10 + 1
      const paramMap = body.paramMap
      const newsName = paramMap.newsName

      if (newsName == 'abcd') {
        return toSuccess(
          mock({
            currentPage: currentPage,
            showCount: body.showCount,
            totalResult: 0,
            totalPage: 0,
            dataList: [],
          }),
          400
        )
      }

      return toSuccess(
        mock({
          currentPage: currentPage,
          showCount: body.showCount,
          totalResult: 100,
          totalPage: 10,
          [`dataList|${body.showCount}`]: [
            {
              'id|+1': idbase,
              newsName: newsName ? newsName : '@cword(3, 30)',
              subname: '@cword(3,20)',
              createTime: '@date',
              updateTime: '@date',
              'workEmployee|1-3': [
                {
                  'key|+1': 1,
                  title: '@cname',
                },
              ],
              descript: '@cword(3,20)',
            },
          ],
        }),
        400
      )
    },
    '/api/news/bathDelete': (options) => toSuccess({ options }, 400),
    '/api/news/getWorkEmployee': (options) =>
      mock({
        status: true,
        'data|10': [
          {
            'code|+1': 1,
            codeName: '@cname',
          },
        ],
      }),
    '/api/news/save': (options) => toSuccess({ options }, 800),
  }
}
