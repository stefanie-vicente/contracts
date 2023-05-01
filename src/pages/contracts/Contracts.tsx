import { useAppSelector } from '../../hooks';
import { selectContracts } from './contractSlice';

import Contract from '../../components/contract/Contract';
import { IContract } from '../../interfaces/contract';

const Contracts = () => {
  const contracts = useAppSelector(selectContracts);
  console.log(contracts);
  return (
    <div>
      {contracts.map((c: IContract) => (
        <Contract {...c} />
      ))}
    </div>
  );
}

export default Contracts;
