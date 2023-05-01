import contracts from '../../data/contracts.json';

import { createSlice } from '@reduxjs/toolkit';
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
    deleteAll: (state) => {
      state.items = [];
    },
  },
});

export const selectContracts = (state: RootState) => state.contract.items;

export default contractSlice.reducer;
