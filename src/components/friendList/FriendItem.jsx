import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendItem.styled';
function FriendItem({ id, isOnline, avatar, name }) {
  return (
    <Item id={id}>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

export default FriendItem;

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
