import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a5cb0ccfc4f84f5bbd7f20fb304295ed',
    language: 'pt-BR',
    page: 1
  }
})

export default api
