import AccountRow from "./AccountRow";

function AccountTable({ accounts }) {
  const rows = [];

  accounts.forEach((account) => {
    rows.push(
      <AccountRow
        account={account}
        key={account.id} />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Surname</th>
          <th>Name</th>
          <th>Account No</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default AccountTable;