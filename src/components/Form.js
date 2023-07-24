import { useState } from "react";

export default function Form({ onAddItems }) {
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
