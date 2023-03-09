import { useState } from 'react';

function Create({ setCreateAccount }) {

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');

    const create = _ => {
        setCreateAccount({
                surname,
                name,
            });
        // Return Default values    
        setSurname('');
        setName('');
    }

    return (
    <div className='add-account'>
        <h2>Add an account</h2>
        <input
        type="text"
        value={name}
        required
        placeholder="Enter a name..."
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type="text"
        value={surname}
        required
        placeholder="Enter a surname..."
        onChange={(e) => setSurname(e.target.value)}
        />
        <button onClick={create}>add</button>
    </div>
    )
}

export default Create;
