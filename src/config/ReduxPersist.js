import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform'
import { AsyncStorage } from 'react-native'

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  version: '1',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
