import React from 'react';

import { useAppSelector } from '../../hooks';
import { selectCustomers } from '../../pages/customers/customerSlice';
import { selectContracts } from '../contracts/contractSlice';

import { ICustomer } from '../../interfaces/customer';
import Customer from '../../components/customer/Customer';

import { CardsList } from '../../components/styledComponents';

const Customers = () => {
  const customers = useAppSelector(selectCustomers);
  const contracts = useAppSelector(selectContracts);

  const customersContracts = customers.map((c) => ({
    ...c,
    contracts: contracts.filter((cc) => cc.customerId === c.id),
  }));

  return (
    <>
      <h1>Customers</h1>
      <CardsList>
        {customersContracts.map((c: ICustomer) => {
          return <Customer {...c} key={c.id} />;
        })}
      </CardsList>
    </>
  );
};

export default Customers;
