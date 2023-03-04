import { useState } from 'react';

function Create({ setCreateAccount }) {

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [empty, setEmpty] = useState(false);
    const [amount, setAmount] = useState(0);

    const create = _ => {
        setCreateAccount(
            {
                surname,
                name,
                empty,
                amount: parseInt(amount)
            });
        // Return Default values    
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
        value={name}
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type="text"
        value={surname}
        placeholder="Surname..."
        onChange={(e) => setSurname(e.target.value)}
        />
        <button onClick={create}>add</button>
    </div>
    )
}

export default Create;
