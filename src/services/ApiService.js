import apisauce from 'apisauce'
import { store } from '../helpers/registerScreens'
import API from '../config/env.development'

export const getToken = (state) => state.auth.data ? state.auth.data.token : null

const create = (baseURL = API.ENDPOINT) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': 'application/json'
    },
    timeout: 10000
  })

  api.addRequestTransform(request => {
    let token = getToken(store.getState())
    if (token) {
      request.headers['x-access-token'] = token
    }
  })


  const loginUser = (email, password) => {
    return api.post(API.LOGIN, { email, password })
  }

  const registerUser = (fullName, email, password) => {
    return api.post(API.REGISTER, { fullName, email, password })
  }

  const getGames = () => {
    return api.get(API.GAMES)
  }

  const postGames = (opponentName, score, address, lat, long) => {
    return api.post(API.GAMES, { opponentName, score, address, lat, long })
  }

  return {
    loginUser,
    registerUser,
    getGames,
    postGames
  }
}

export default {
  create
}
