import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from '../data/Profile.json';
import friends from '../data/friends.json';
import transactions from '../data/tranzaction.json';

export const App = () => {
  return (
    <>
      <Profile
        name={data.username}
        tag={data.tag}
        location={data.location}
        image={data.avatar}
        stats={data.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
