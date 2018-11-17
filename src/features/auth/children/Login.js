import ScreenIDs from '../../../config/ScreenIDs'
import StackConfig from '../options/StackConfig';

export default {
  component: {
    id: ScreenIDs.LOGIN,
    name: ScreenIDs.LOGIN,
    options: {
      topBar: {
        title: {
          text: ScreenIDs.LOGIN,
        },
        ...StackConfig,
      },
    },
  },
};
