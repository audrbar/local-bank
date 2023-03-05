import { useState} from 'react';

function Edit({ account, setEditAccount, editAccount }) {

    const [empty, setEmpty] = useState(account.empty);
    const [amount, setAmount] = useState(account.amount);

    const edit = _ => {
        setEditAccount(
            {
                amount: parseInt(amount),
                empty,
                id: editAccount
            });
    }

    return (
        <button onClick={() => setEditAccount(account)}>Add</button>
    );
}

export default Edit;