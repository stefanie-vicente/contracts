import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contractReducer from './pages/contracts/contractSlice';
import customerReducer from './pages/customers/customerSlice';

export const store = configureStore({
  reducer: {
    contract: contractReducer,
    customer: customerReducer,
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
