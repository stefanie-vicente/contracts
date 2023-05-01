import React from 'react';

import { ICustomer } from '../../interfaces/customer';
import { IContract } from '../../interfaces/contract';

import { Button, Card, CardTitle, List, ListItem } from '../styledComponents';

export interface ICustomerProps {
  customer: ICustomer;
  deleteCustomer: (id: number) => void;
}

const Customer = (props: ICustomerProps) => {
  const { customer, deleteCustomer } = props;
  return (
    <Card>
      <CardTitle>{customer.name}</CardTitle>
      <Button onClick={() => deleteCustomer(customer.id)}>Delete</Button>
      <List>
        {customer.contracts?.map((c: IContract, i: number) => (
          <ListItem key={i}>{c.name}</ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Customer;
