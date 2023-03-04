function AccountRow({ account }) {
  const name = account.full ? account.name :
    <span style={{ color: 'red' }}>
      {account.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{account.price}</td>
    </tr>
  );
}

export default AccountRow;