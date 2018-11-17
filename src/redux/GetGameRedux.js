import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

const { Types, Creators } = createActions({
    getGamesRequest: null,
    getGamesSuccess: ['data'],
    getGamesFailure: ['error'],
})

export const GetGamesTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  data: null,
  error: null,
  loading: false,
})

export const getGamesRequest = (state) => state.merge({ loading: true, error: null, data: null })
export const getGamesSuccess = (state, { data }) => state.merge({ loading: false, error: null, data })
export const getGamesFailure = (state, { error }) => state.merge({ loading: false, error, data: null })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_GAMES_REQUEST]: getGamesRequest,
  [Types.GET_GAMES_SUCCESS]: getGamesSuccess,
  [Types.GET_GAMES_FAILURE]: getGamesFailure,
})
