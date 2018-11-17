import { Navigation } from 'react-native-navigation';
import ScreenIDs from '../../config/ScreenIDs'
import Login from './children/Login';


export default () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: ScreenIDs.AUTH,
        children: [Login],
      },
    },
  });
};
