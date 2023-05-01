import customer from '../../data/customer.json';

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

import { ICustomer } from '../../interfaces/customer';

export interface CustomerState {
  items: ICustomer[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CustomerState = {
  items: customer,
  status: 'idle',
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    deleteAll: (state) => {
      state.items = [];
    },
  },
});

export const selectCustomers = (state: RootState) => state.customer.items;

export default customerSlice.reducer;
