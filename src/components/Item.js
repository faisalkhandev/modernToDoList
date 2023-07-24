import React from "react";

export function Item({ items, onDeleteItem, onCheckItem }) {
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
