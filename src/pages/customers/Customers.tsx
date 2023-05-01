import { useAppSelector } from '../../hooks';
import { ICustomer } from '../../interfaces/customer';
import Customer from '../../components/customer/Customer';
import { selectCustomers } from '../../pages/customers/customerSlice';

const Contracts = () => {
  const customers = useAppSelector(selectCustomers);

  return (
    <div>
      {customers.map((c: ICustomer) => (
        <Customer {...c} />
      ))}
    </div>
  );
};

export default Contracts;
