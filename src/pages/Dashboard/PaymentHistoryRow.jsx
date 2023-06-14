import { ClassNames } from "@emotion/react";

const PaymentHistoryRow = ({ enrolledClass ,index}) => {
  const {price,transactionId,date,className} = enrolledClass;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{className}</td>
      <td>{transactionId}</td>
      <td>${price}</td>
      <td>{date}</td>
    </tr>
  );
};

export default PaymentHistoryRow;
