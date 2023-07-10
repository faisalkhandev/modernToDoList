import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 2, packed: false },
  { id: 3, description: "Mouse", quantity: 5, packed: false },
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
  return (
    <div className="add-form">
      <h3>What would you like to add? 😍</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item items={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ items }) {
  return (
    <li>
      <span>
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
