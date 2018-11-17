import ScreenIDs from '../../../config/ScreenIDs'
import StackConfig from '../options/StackConfig';

/* eslint-disable global-require */
export default {
  component: {
    id: ScreenIDs.REGISTER,
    name: ScreenIDs.REGISTER,
    options: {
      topBar: {
        title: {
          text: ScreenIDs.REGISTER,
        },
        ...StackConfig,
      },
    },
  },
};
