import { Navigation } from 'react-native-navigation';
import ScreenIDs from '../../config/ScreenIDs'
import Game from './children/StackGame';

export default () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: ScreenIDs.APP,
        componentId: ScreenIDs.APP,
        testID: ScreenIDs.APP,
        children: [Game],
      },
    },
  });
