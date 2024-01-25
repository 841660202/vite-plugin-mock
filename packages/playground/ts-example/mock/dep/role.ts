import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/getRoleById',
    method: 'get',
    response: (req, res) => {
      console.log('res', res)
      res.statusCode = 200
      res.end(
        JSON.stringify({
          hello: 'world',
        }),
      )
      return {
        code: 0,
        message: 'ok',
        data: {
          roleName: 'admin',
          roleValue: 'admin',
        },
      }
    },
  },
  {
    url: '/api/testRestful/:id',
    method: 'get',
    response: (req) => {
      console.log('req', req)
      const { query } = req
      console.log('id>>>>1121>>>>', query.id)
      return {
        code: 0,
        message: 'ok',
        data: {
          roleName: 'admin',
          roleValue: 'admin',
        },
      }
    },
  },
] as MockMethod[]
