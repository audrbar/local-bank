function AccountRow({ account }) {

  return (
    <tr>
      <td>{account.surname}</td>
      <td>{account.name}</td>
      <td>{account.id}</td>
      <td>{account.amount}</td>
    </tr>
  );
}

export default AccountRow;