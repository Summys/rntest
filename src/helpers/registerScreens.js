import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux'
import createStore from '../redux'

import Game from '../screens/game';
import Search from '../screens/search';
import Settings from '../screens/settings';
import Login from '../screens/login';
import Register from '../screens/register';
import Splash from '../screens/splash';

import ScreenIDs from '../config/ScreenIDs';

export const store = createStore()

const Screens = new Map();
Screens.set(ScreenIDs.GAME, Game);
Screens.set(ScreenIDs.SEARCH, Search);
Screens.set(ScreenIDs.SETTINGS, Settings);
Screens.set(ScreenIDs.LOGIN, Login);
Screens.set(ScreenIDs.REGISTER, Register);
Screens.set(ScreenIDs.SPLASH, Splash);


Screens.forEach((Screen, key) => Navigation.registerComponentWithRedux(key, () => Screen, Provider, store));