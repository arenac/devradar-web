import produce from 'immer';

const INITIAL_STATE = {
  dev: null
};

export default function dev(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@dev/ADD_NEW_DEV_SUCCESS': {
        draft.dev = action.payload.dev;
        break;
      }
      default:
    }
  });
}