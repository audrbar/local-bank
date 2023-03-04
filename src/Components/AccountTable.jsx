import AccountCategoryRow from "./AccountCategoryRow";
import AccountRow from "./AccountRow";

function AccountTable({ accounts }) {
  const rows = [];
  let lastCategory = null;

  accounts.forEach((account) => {
    if (account.category !== lastCategory) {
      rows.push(
        <AccountCategoryRow
          category={account.category}
          key={account.category} />
      );
    }
    rows.push(
      <AccountRow
        account={account}
        key={account.name} />
    );
    lastCategory = account.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default AccountTable;