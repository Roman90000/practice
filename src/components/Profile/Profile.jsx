import { Container, Photo, Info, List } from './Profiles.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Container>
      <Photo src={avatar} alt="User avatar" />
      <Info>{username}</Info>
      <Info>@{tag}</Info>
      <Info>{location}</Info>

      <List>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </List>
    </Container>
  );
};
