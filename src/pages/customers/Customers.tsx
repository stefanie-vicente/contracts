import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCustomers, deleteCustomer } from '../../pages/customers/customerSlice';
import { selectContracts, deleteContractsByCustomerId } from '../contracts/contractSlice';

import { ICustomer } from '../../interfaces/customer';
import Customer from '../../components/customer/Customer';

import { CardsList } from '../../components/styledComponents';

const Customers = () => {
  const dispatch = useAppDispatch();

  const customers = useAppSelector(selectCustomers);
  const contracts = useAppSelector(selectContracts);

  const customersContracts = customers.map((c) => ({
    ...c,
    contracts: contracts.filter((cc) => cc.customerId === c.id),
  }));

  const onClickDeleteCustomer = (id: number) => {
    dispatch(deleteContractsByCustomerId(id))
    dispatch(deleteCustomer(id))
  }

  return (
    <>
      <h1>Customers</h1>
      <CardsList>
        {customersContracts.map((c: ICustomer) => {
          return <Customer customer={c} deleteCustomer={onClickDeleteCustomer} key={c.id} />;
        })}
      </CardsList>
    </>
  );
};

export default Customers;
