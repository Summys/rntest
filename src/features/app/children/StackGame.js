import ScreenIDs from '../../../config/ScreenIDs'
import StackConfig from '../options/StackConfig';

export default {
  component: {
    id: ScreenIDs.GAME,
    name: ScreenIDs.GAME,
    componentId: ScreenIDs.GAME, 
    options: {
      topBar: {
        title: {
          component: {
            name: ScreenIDs.SEARCH
          }
        },
        ...StackConfig,
      },
    },
  },
};
