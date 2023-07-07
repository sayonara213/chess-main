import themeSlice from './theme.slice';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  theme: themeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
