import { List, Name } from './FriendList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <List>
      {friendList.map(friend => (
        <li key={friend.id}>
          <span>{friend.isOnline}</span>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </li>
      ))}
    </List>
  );
};
