import axios from "axios";
import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import "./App.css";
import User from "./User";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(result.data);
  };

  const handleSubmit = async (name) => {
    await axios
      .post("https://jsonplaceholder.typicode.com/users", name)
      .then((response) => setUsers([...users, { id: Date.now(), name: name }]));
  };

  const deleteHandler = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <div className="App">
      <h1>React Crud App</h1>
      <AddUser handleSubmit={handleSubmit} />
      <User users={users} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
