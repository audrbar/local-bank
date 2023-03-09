function AccountList({ accountList, setDeleteAccount, setEditAccount, searchTerm, isEmpty }) {

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
            <th>Account</th>
          </tr>
        </thead>
            <tbody >
          { accountList.filter(({ surname, amount }) => {
            const includesSurname = surname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            return isEmpty ? includesSurname && amount > 0 : includesSurname;
          }).map((account) => (
            <tr className="account-row" key={account.id}>
              <td>{account.surname}</td>
              <td>{account.name}</td>
              <td>{account.id}</td>
              <td>{account.amount}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={account.amount}
                  placeholder="Amount $?"
                  onChange={(e) => e.target.value >= 0 ? setEditAccount({ ...account, amount: parseInt(e.target.value) }) : null }
                />
                </td>
             
              <td>
              <button onClick={() => setDeleteAccount(account.id)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  );
}

export default AccountList;
