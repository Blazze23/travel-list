/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>It's time to add some items to your packing list 😎</em>
      </p>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {percentage !== 100 && (
        <em>
          You have {totalItems} items on your list, and you already packed{" "}
          {packedItems} ({percentage}%)
        </em>
      )}

      {percentage === 100 && (
        <em>You've packed everything, you're ready to go! Safe travels ✈️</em>
      )}
    </footer>
  );
}

export default Stats;
