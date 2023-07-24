import React, { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 2, packed: true },
//   { id: 3, description: "Mouse", quantity: 5, packed: true },
//   { id: 4, description: "Laptop", quantity: 6, packed: false },
// ];

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    // console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
      />
      <Stats items={items} />
    </div>
  );
};

function Logo() {
  return (
    <div className="logo">
      <h1> Modern ToDo List ⚒ </h1>
    </div>
  );
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmitBtn(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = { description, quantity, packed: false, id: Date.now() };
    console.log(newItems);

    onAddItems(newItems);

    setDescription("");
    setQuantity(1);
  }
  // function handleOnChange(e) {
  //   setDescription(e.target.value);
  // }

  return (
    <form className="add-form" onSubmit={handleSubmitBtn}>
      <select
        name=""
        id={quantity}
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items...."
        value={description}
        onChange={(e) => {
          console.log(e.target.val);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, onCheckItem }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            items={item}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select name={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
      </div>
    </div>
  );
}

function Item({ items, onDeleteItem, onCheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => {
          onCheckItem(items.id);
        }}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <span onClick={() => onDeleteItem(items.id)}>❌</span>
    </li>
  );
}

/* Footer Section */

function Stats({ items }) {
  if (!items.length) return <em className="stats">Add your tasks 🚀🚀</em>;

  const numItems = items.length;
  const doneItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((doneItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Done all tasks. Take a 🥛 and 🛌 "
          : `You have ${numItems} items added. You have done ${doneItems} tasks (${percentage}%)`}
      </em>
    </footer>
  );
}
export default App;
