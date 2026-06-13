import "../App.css";
const Item = (props) => {
  return (
    <li className="list-group-item kg-item">
      {props.FoodItem}
    </li>
  );
};

export default Item;