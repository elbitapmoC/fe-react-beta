"use client";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

interface Produce {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

const FilterableProductTable = ({ products }: { products: Produce[] }) => {
  // { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' }, { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' }

  return (
    <form>
      <SearchBar />
      <ProductTable products={products} />
    </form>
  );
};

export default FilterableProductTable;
