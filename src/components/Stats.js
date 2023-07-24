import React from "react";

/* Footer Section */
export function Stats({ items }) {
  if (!items.length) return <em className="stats">Add your tasks 🚀🚀</em>;

  const numItems = items.length;
  const doneItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((doneItems / numItems) * 100);

  return (
    <footer className="sstats">
      <em>
        {percentage === 100
          ? "Done all tasks. Take a 🥛 and 🛌 "
          : `You have ${numItems} items added. You have done ${doneItems} tasks (${percentage}%)`}
      </em>
    </footer>
  );
}
