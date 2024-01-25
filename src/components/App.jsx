import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import data from '../data/Profile.json'
import friends from '../data/friends.json'
import transactions from '../data/tranzaction.json'


export const App = () => {
  return (
    <>
      <Profile profiles={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
</>
  );
}

