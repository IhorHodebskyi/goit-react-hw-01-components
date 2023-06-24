import PropTypes from 'prop-types';
import { Tr, Td } from './TransactionHistoryTr.styled';
function TransactionHistoryTr({ currency, amount, type, id }) {
  return (
    <Tr key={id}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
}

export default TransactionHistoryTr;

TransactionHistoryTr.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};
