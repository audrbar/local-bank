import AccountRow from "./AccountRow";

function AccountTable({ accountList, setDeleteAccount, searchTerm, isEmpty }) {
  const rows = [];

  accountList.forEach((account) => {
    if (null === accountList) {
      return (
        <h1>LOADING...</h1>
      )
    }
    if (account.surname.toLowerCase().indexOf(
        searchTerm.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (isEmpty && account.empty) {
      return;
    }
    rows.push(
      <AccountRow
        account={account}
        key={account.id} />
    );
  });

  return (
    <table>
      <thead>
        <tr className="header-row">
          <th>Surname</th>
          <th>Name</th>
          <th>Account No</th>
          <th>Amount</th>
          <th>Account</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default AccountTable;
