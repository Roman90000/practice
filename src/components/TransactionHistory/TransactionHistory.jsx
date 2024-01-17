import { Table, Caption, TableEl } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Caption>Type</Caption>
          <Caption>Amount</Caption>
          <Caption>Currency</Caption>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <tr>
            <TableEl>{item.type}</TableEl>
            <TableEl>{item.amount}</TableEl>
            <TableEl>{item.currency}</TableEl>
          </tr>
        </tbody>
      ))}
    </Table>
  );
};
