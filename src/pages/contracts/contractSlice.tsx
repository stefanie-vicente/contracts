import contracts from '../../data/contracts.json';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { IContract } from '../../interfaces/contract';

export interface ContractState {
  items: IContract[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ContractState = {
  items: contracts,
  status: 'idle',
};

export const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    deleteContractsByCustomerId: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.customerId !== action.payload);
    },
  },
});
export const { deleteContractsByCustomerId } = contractSlice.actions;

export const selectContracts = (state: RootState) => state.contract.items;

export default contractSlice.reducer;
