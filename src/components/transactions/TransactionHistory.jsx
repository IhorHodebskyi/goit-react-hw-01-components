import PropTypes from 'prop-types';

import TransactionHistoryTr from './TransactionHistoryTr';
function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

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
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {};
