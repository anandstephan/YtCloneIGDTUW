import ListItem from "./ListItem";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const List = () => {
  return (
    <>
      {arr.map((item, idx) => (
        <ListItem />
      ))}
    </>
  );
};
export default List;
