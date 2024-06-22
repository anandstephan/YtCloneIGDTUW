import ListItem from "./ListItem";

const List = (props) => {
  return (
    <>
      {props.list.map((item, idx) => (
        <ListItem myItem={item} />
      ))}
    </>
  );
};
export default List;
