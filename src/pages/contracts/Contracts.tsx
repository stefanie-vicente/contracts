import React from 'react';

import { useAppSelector } from '../../hooks';
import { selectContracts } from './contractSlice';

import { IContract } from '../../interfaces/contract';

import Contract from '../../components/contract/Contract';

import { CardsList } from '../../components/styledComponents';

const Contracts = () => {
  const contracts = useAppSelector(selectContracts);

  return (
    <>
      <h1>Contracts</h1>
      <CardsList>
        {contracts.map((c: IContract, i: number) => (
          <Contract {...c} key={i} />
        ))}
      </CardsList>
    </>
  );
};

export default Contracts;
