import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {authApiSlice} from './apis/auth';
import authReducer from './features/authSlice';
import uiReducer from './features/ui/uiSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistadeAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: persistadeAuthReducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
