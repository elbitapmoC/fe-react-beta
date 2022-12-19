interface Produce {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

const ProductTable = ({ products }: { products: Produce[] }) => {
  const rows: any = [];
  const lastCategory: any = null;

  products.forEach((product: Produce) => {
    // category: 'Fruits', price: '$1', stocked: true, name: 'Apple'
    console.log(product);
    return <></>;
  });

  return (
    <table className="mt-10">
      <thead>
        <tr className="flex gap-4">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {rows}
          <td>a</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
