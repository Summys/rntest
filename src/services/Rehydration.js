import ReduxPersist from '../config/ReduxPersist'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import StartupActions from '../redux/StartupRedux'

const updateReducers = (store) => {
  const { version } = ReduxPersist
  const startup = () => store.dispatch(StartupActions.startup())

  AsyncStorage.getItem('version').then((localVersion) => {
    if (localVersion !== version) {
      persistStore(store, null, startup).purge()
      AsyncStorage.setItem('version', version)
    } else {
      persistStore(store, null, startup)
    }
  }).catch(() => {
    persistStore(store, null, startup)
    AsyncStorage.setItem('version', version)
  })
}

export default { updateReducers }
