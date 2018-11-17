import ScreenIDs from '../../../config/ScreenIDs'
import StackConfig from '../options/StackConfig';

export default {
  component: {
    id: ScreenIDs.SETTINGS,
    name: ScreenIDs.SETTINGS,
    options: {
      topBar: {
        title: {
          text: ScreenIDs.SETTINGS,
        },
        ...StackConfig,
      },
    },
  },
};
