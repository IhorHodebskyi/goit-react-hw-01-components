import PropTypes from 'prop-types';
import { Table, Thead, Tr, Th } from './TransactionHistory.styled';
import TransactionHistoryTr from './TransactionHistoryTr';
function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <tbody>
        {items.map(({ currency, amount, type, id }) => (
          <TransactionHistoryTr
            key={id}
            currency={currency}
            amount={amount}
            type={type}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      currency: PropTypes.string,
      amount: PropTypes.string,
      type: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
