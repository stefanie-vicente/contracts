import customer from '../../data/customer.json';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { ICustomer } from '../../interfaces/customer';

export interface CustomerState {
  items: ICustomer[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CustomerState = {
  items: customer as ICustomer[],
  status: 'idle',
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    deleteCustomer: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { deleteCustomer } = customerSlice.actions;

export const selectCustomers = (state: RootState) => state.customer.items;

export default customerSlice.reducer;
