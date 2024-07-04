import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeReducer from './slices/theme-slice';
import profileReducer from './slices/profile-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    profile: profileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
