import { useState } from 'react';

function Create({createAccount, setCreateAccount, onCreateAccountChange}) {

    const [number, setNumber] = useState(1);
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [empty, setEmpty] = useState(false);
    const [amount, setAmount] = useState(0);

    const create = _ => {
        setCreateAccount(
            {
                number: parseInt(number),
                surname,
                name,
                empty,
                amount: parseInt(amount)
            });
        setNumber(1);
        setSurname('');
        setName('');
        setEmpty(true);
        setAmount(0);
    }

    return (
    <div className='add-account'>
        <h2>Add Account</h2>
        <input
        type="text"
        value={surname}
        placeholder="Surname..."
        onChange={(e) => setCreateAccount(e.target.value)}
        />
        <input
        type="text"
        value={name}
        placeholder="Name..."
        onChange={(e) => setCreateAccount(e.target.value)}
        />
        <button onClick={create}>add</button>
    </div>
    )
}

export default Create;
