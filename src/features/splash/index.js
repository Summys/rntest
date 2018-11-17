import { Navigation } from 'react-native-navigation';
import ScreenIDs from '../../config/ScreenIDs'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: ScreenIDs.SPLASH,
      },
    },
  });
});
