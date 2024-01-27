import css from './TransactionHistory.module.css';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transaction}>
      <thead>
        <tr className={css.list}>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.list2}>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />
          );
        })}
      </tbody>
    </table>
  );
};
