import { IContract } from "./contract";

export interface ICustomer {
  id: number;
  name: string;
  contracts: IContract[] | []
}
