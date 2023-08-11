/* eslint-disable react/prop-types */
function Item({ id, description, quantity, packed, onDeleteItem, onPackItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => {
          onPackItem(id);
        }}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

export default Item;
