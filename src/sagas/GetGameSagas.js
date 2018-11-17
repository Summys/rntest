import { put, call } from 'redux-saga/effects'
import GetGamesActions from '../redux/GetGameRedux'

export function* getGames (api) {
  const response = yield call(api.getGames)
  const { data, ok } = response
  const error = data.message || "Enter your credentials"
  if (data && ok) {
    yield put(GetGamesActions.getGamesSuccess(data))
  } else {
    yield put(GetGamesActions.getGamesFailure(error))
  }
}
