import AccountRow from "./AccountRow";

function AccountTable({ accounts, searchTerm, isEmpty }) {
  const rows = [];

  accounts.forEach((account) => {
    if (account.surname.toLowerCase().indexOf(
        searchTerm.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (isEmpty) {
      return;
    }
    rows.push(
      <AccountRow
        account={account}
        key={account.id} />
    );
  });

  return (
    <table>
      <thead>
        <tr className="header-row">
          <th>Surname</th>
          <th>Name</th>
          <th>Account No</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default AccountTable;

// function ProductTable({ products, filterText, inStockOnly }) {
//   const rows = [];
//   let lastCategory = null;

//   products.forEach((product) => {
//     if (
//       product.name.toLowerCase().indexOf(
//         filterText.toLowerCase()
//       ) === -1
//     ) {
//       return;
//     }
//     if (inStockOnly && !product.stocked) {
//       return;
//     }
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category} />
//       );
//     }
//     rows.push(
//       <ProductRow
//         product={product}
//         key={product.name} />
//     );
//     lastCategory = product.category;
//   });