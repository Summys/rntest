import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

const { Types, Creators } = createActions({
    postGamesRequest: ['opponentName', 'score', 'address', 'lat', 'long'],
    postGamesSuccess: ['data'],
    postGamesFailure: ['error'],
})

export const PostGamesTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  data: null,
  error: null,
  loading: false,
})

export const postGamesRequest = (state) => state.merge({ loading: true, error: null, data: null })
export const postGamesSuccess = (state, { data }) => state.merge({ loading: false, error: null, data })
export const postGamesFailure = (state, { error }) => state.merge({ loading: false, error, data: null })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POST_GAMES_REQUEST]: postGamesRequest,
  [Types.POST_GAMES_SUCCESS]: postGamesSuccess,
  [Types.POST_GAMES_FAILURE]: postGamesFailure,
})


