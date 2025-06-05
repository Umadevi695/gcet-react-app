import React, { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [user, setUser] = useState({});
  const Navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;
  const handleSubmit = async () => {
    //setUsers([...users, user]);
    try {
      const url = `${API}/users/register`;
      await axios.post(url, user);
      Navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ padding: "30px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "500px" }}></div>
      <h3>Register</h3>
      <form>
        <p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
          />
        </p>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <hr />
      {users &&
        users.map((value) => (
          <li>
            {value.name}-{value.email}-{value.pass}
          </li>
        ))}
    </div>
  );
}
