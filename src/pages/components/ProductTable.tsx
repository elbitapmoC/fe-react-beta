import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface Produce {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

const ProductTable = ({ products }: { products: Produce[] }) => {
  const rows: any = [];
  let lastCategory: any = null;

  products.forEach(({ category, price, stocked, name }: Produce) => {
    if (category !== lastCategory) {
      rows.push(<ProductCategoryRow category={category} key={category} />);
    }
    rows.push(
      <ProductRow price={price} stocked={stocked} name={name} key={name} />
    );
    lastCategory = category;
  });

  return (
    <table className="m-auto w-2/4 text-center text-sm text-gray-500">
      <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
        <tr>
          <th scope="col" className="py-3 px-6">
            Name
          </th>
          <th scope="col" className="py-3 px-6">
            Price
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
