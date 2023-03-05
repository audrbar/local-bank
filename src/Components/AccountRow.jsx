import Delete from "./Delete";
import Edit from "./Edit";


function AccountRow({ surname, name, id, amount, onEditAccountChange, setDeleteAccount, setEditAccount }) {

  return (
    <tbody className="account-row">
      <tr>
        <td>{surname}</td>
        <td>{name}</td>
        <td>{id}</td>
        <td>{amount}</td>
        <td>
          <input
            type="text"
            value={amount}
            placeholder="Amount $?"
            onChange={(e) => onEditAccountChange(e.target.value)}
            />
            <Edit account={id} setEditAccount={setEditAccount} />
          </td>
        <td>
          <input
            type="text"
            value={amount}
            placeholder="Amount $?"
            onChange={(e) => onEditAccountChange(e.target.value)}
            />
            <Edit account={id} setEditAccount={setEditAccount} />
          </td>
        <td><Delete account={id} setDeleteAccount={setDeleteAccount} /></td>
      </tr>
    </tbody>
  );
}

export default AccountRow;