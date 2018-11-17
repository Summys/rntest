import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['data'],
  loginFailure: ['error'],
  registerRequest: ['fullName', 'email', 'password'],
  registerSuccess: ['data'],
  registerFailure: ['error'],
  logout: null
})

export const AuthTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  data: null,
  error: null,
  loading: false,
})

export const loginRequest = (state) => state.merge({ loading: true, error: null, data: null })
export const loginSuccess = (state, { data }) => state.merge({ loading: false, error: null, data })
export const loginFailure = (state, { error }) => state.merge({ loading: false, error, data: null })

export const registerRequest = (state) => state.merge({ loading: true, error: null, data: null })
export const registerSuccess = (state, { data }) => state.merge({ loading: false, error: null, data })
export const registerFailure = (state, { error }) => state.merge({ loading: false, error, data: null })

export const logout = (state) => INITIAL_STATE

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_FAILURE]: registerFailure,
  [Types.LOGOUT]: logout,
})

export const isLoggedIn = (state) => {
  const { token } = state.auth.data || {}
  
  return token !== undefined
}

