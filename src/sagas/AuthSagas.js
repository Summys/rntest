import { put, call } from 'redux-saga/effects'
import AuthActions from '../redux/AuthRedux'
import { getGames } from './GetGameSagas'

export function* login (api, { email, password }) {
  const response = yield call(api.loginUser, email, password)
  const { data, ok } = response
  const error = data.message || "Enter your credentials"
  if (data && ok) {
    yield put(AuthActions.loginSuccess(data))
    yield getGames(api)
  } else {
    yield put(AuthActions.loginFailure(error))
  }
}

export function* register (api, { fullName, email, password }) {
  const response = yield call(api.registerUser, fullName, email, password)
  const { data, ok } = response
  const error = data.message || "Enter your credentials"
  if (data && ok) {
    yield put(AuthActions.registerSuccess(data))
  } else {
    yield put(AuthActions.registerFailure(error))
  }
}
