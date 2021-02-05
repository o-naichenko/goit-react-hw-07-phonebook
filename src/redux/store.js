import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import {
  contactsReducer,
  filterReducer,
  isLoadingReducer,
} from './contacts/contacts-reducer';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// export const persistor = persistStore(store);
