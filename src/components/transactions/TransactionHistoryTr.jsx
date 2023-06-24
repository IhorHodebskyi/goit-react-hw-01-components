import PropTypes from 'prop-types';

function TransactionHistoryTr({ currency, amount, type, id }) {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default TransactionHistoryTr;

TransactionHistoryTr.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};
