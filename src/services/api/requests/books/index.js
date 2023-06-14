import { api } from 'services/api'

export const getHighLightedBooks = () =>
  api.get('/book?highlighted=true', {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub-token')}`
    }
  })