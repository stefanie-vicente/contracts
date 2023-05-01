import React from 'react';

import { useAppDispatch } from '../../hooks';

import { deleteCustomer } from '../../pages/customers/customerSlice';

import { ICustomer } from '../../interfaces/customer';
import { IContract } from '../../interfaces/contract';

import { Button, Card, CardTitle, List, ListItem } from '../styledComponents'

const Customer = (props: ICustomer) => {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardTitle>{props.name}</CardTitle>
      <Button onClick={() => dispatch(deleteCustomer(props.id))}>Delete</Button>
      <List>
        {props.contracts?.map((c: IContract, i: number) => (
          <ListItem key={i}>{c.name}</ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Customer;
