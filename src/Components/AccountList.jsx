import AccountRow from "./AccountRow";

function AccountList({ accountList, setDeleteAccount, setEditAccount, searchTerm, isEmpty }) {

//   if (account.surname.toLowerCase().indexOf(
//     searchTerm.toLowerCase()
//   ) === -1
// ) {
//   return;
// }
// if (isEmpty && account.empty) {
//   return;
// }

  return (
    <div className="accounts-list">
      <table className="account-header-row">
        <thead>
          <tr>
            <th>Surname</th>
            <th>Name</th>
            <th>Account No</th>
            <th>Amount</th>
            <th>Add Money</th>
            <th>Pay Money</th>
            <th>Account</th>
          </tr>
        </thead>
          { accountList.map((account) => (
          <AccountRow
            key={account.id}
            account={account}
            surname={account.surname}
            name={account.name}
            id={account.id}
            amount={account.amount}
            setDeleteAccount={setDeleteAccount}
            setEditAccount={setEditAccount}
            searchTerm={searchTerm}
            isEmpty={isEmpty}
          />))}
      </table>
    </div>
  );
}

export default AccountList;
