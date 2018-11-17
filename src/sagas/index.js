import { takeLatest } from 'redux-saga/effects'
import API from '../services/ApiService'

import { StartupTypes } from '../redux/StartupRedux'
import { AuthTypes } from '../redux/AuthRedux'
import { GetGamesTypes } from '../redux/GetGameRedux' 

import { startup } from './StartupSagas'
import { login, register } from './AuthSagas'
import { getGames } from './GetGameSagas'



export const api = API.create()

export default function* root () {
  yield [
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(AuthTypes.LOGIN_REQUEST, login, api),
    takeLatest(AuthTypes.REGISTER_REQUEST, register, api),
    takeLatest(GetGamesTypes.GET_GAMES_REQUEST, getGames, api),
  ]
}
