export default function ({$axios, redirect, store}){
  $axios.interceptors.request.use(request =>{
      if (request.method == 'put') {
        if (store.getters['auth/isAuthenticated'] && !request.headers.common.Authorization){
          const token = store.getters['auth/token']
          request.headers.common.Authorization = token ? `Bearer ${token}` : ''
        }
      }
    return request
  })

  $axios.onError(error =>{
    if (error.response){
      if (error.response.status === 401) {
        redirect('/login?message=session')
        store.dispatch('auth/logout')
      }
      if (error.response.status === 403) {
        console.log('error.response ', error.response)
      }
      if (error.response.status === 500) {
        console.error('Server 500 error')
        redirect('/error')
      }
    }
  })
}
