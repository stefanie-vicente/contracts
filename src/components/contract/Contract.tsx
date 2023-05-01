import React from 'react'

import { IContract } from '../../interfaces/contract';

import { Card, CardTitle } from '../styledComponents';

const Contract = (props: IContract) => {
  return (
    <Card>
      <CardTitle>{props.name}</CardTitle>
      <p>{props.content}</p>
    </Card>
  );
};

export default Contract;
