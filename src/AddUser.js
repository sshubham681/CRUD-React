import React, { useState } from "react";

const AddUser = ({ handleSubmit }) => {
  const [input, setInput] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(input);
    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onSubmit}>Add User</button>
    </form>
  );
};

export default AddUser;
