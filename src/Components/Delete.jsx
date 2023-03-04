function Delete({ setDeleteAccount, account }) {

    return (
        <button onClick={() => setDeleteAccount(account)}>Delete</button>
    );
}

export default Delete;