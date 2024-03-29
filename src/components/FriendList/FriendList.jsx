import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />;
      })}
    </ul>
  );
};
