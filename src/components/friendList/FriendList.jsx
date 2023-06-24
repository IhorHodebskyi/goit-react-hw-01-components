import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import { List } from './FriendList.styled';
function FriendList({ friends }) {
  return (
    <List className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </List>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
