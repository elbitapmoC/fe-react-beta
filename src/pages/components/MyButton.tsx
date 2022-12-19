const MyButton = ({
  count,
  onClick,
}: {
  count: number;
  onClick: React.MouseEventHandler;
}) => {
  return <button onClick={onClick}>Clicked {count} times</button>;
};

export default MyButton;
