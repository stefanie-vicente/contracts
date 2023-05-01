import { ICustomer } from "../../interfaces/customer"

const Customer = (props: ICustomer) => {
    return <>{props.name}</>
}

export default Customer