import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 2, packed: true },
  { id: 3, description: "Mouse", quantity: 5, packed: true },
  { id: 4, description: "Laptop", quantity: 6, packed: false },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
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
function Form() {
  const { descrip, setDescription } = useState("");

  function handleAddBtn(e) {
    e.preventDefault();
  }
  // function handleOnChange(e) {
  //   setDescription(e.target.value);
  // }

  return (
    <form className="add-form" onSubmit={handleAddBtn}>
      <select name="" id="">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items...."
        value={descrip}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item items={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ items }) {
  return (
    <li>
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <span>❌</span>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>The Footer goes here ❤</em>
    </footer>
  );
}
export default App;
