import Delete from "./Delete";

function AccountRow({ account, setDeleteAccount }) {

  return (
    <tr>
      <td>{account.surname}</td>
      <td>{account.name}</td>
      <td>{account.id}</td>
      <td>{account.amount}</td>
      <td><Delete account={account.id} setDeleteAccount={setDeleteAccount} /></td>
    </tr>
  );
}

export default AccountRow;