import request from './request'

// export const GetUsersApi = (name) => request.get(`/users/${name}/repos`)
// export const GetDetailApi = (fullName) => request.get(`/repos/${fullName}/contents`)
export const GetLoginApi = () => request.get('/login')
export const GetListApi = () => request.get('/getlist')


