import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from './Data.js/user.json';
import data from './Data.js/data.json';
import friendList from './Data.js/friends.json';
import transactions from './Data.js/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile user={user} />
    <Statistics data={data} />
    <FriendList friendList={friendList} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>
);
