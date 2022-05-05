import request from './request'

// export const GetUsersApi = (name) => request.get(`/users/${name}/repos`)
// export const GetDetailApi = (fullName) => request.get(`/repos/${fullName}/contents`)
export const GetLoginApi = (params) => request.post('/login', params)
export const GetUsersApi = (params) => request.get('/users', { params })
export const AddUsersApi = (params) => request.post('/users', params)
export const GetGoodsApi = (params) => request.get('/goods', { params })

