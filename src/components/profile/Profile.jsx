import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Info,
  Quantity,
  Label,
  StatsList,
  StatsItem,
} from './Profile.styled';
export default function Profile({ stats, avatar, location, tag, username }) {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  stats: PropTypes.object,
  avatar: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  username: PropTypes.string,
};
