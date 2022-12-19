const ProductRow = ({
  price,
  stocked,
  name,
}: {
  price: string;
  stocked: boolean;
  name: string;
}) => {
  return (
    <tr>
      <td className={!stocked ? "text-red-600" : ""}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
