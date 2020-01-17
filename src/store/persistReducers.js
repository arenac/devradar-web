import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'devradar',
      storage,
      whitelist: ['dev'],
    },
    reducers
  );
  return persistedReducer;
};
