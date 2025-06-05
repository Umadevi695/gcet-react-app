import React from "react";
import App, { AppContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const { user } = useContext(AppContext);
  return (
    <header>
      <h1>My Online Shop</h1>
      <nav>
        <Link to="/">Home</Link>-<Link to="/cart">Cart</Link>-
        <Link to="/order">Order</Link>-
        {user.token ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <hr />
    </header>
  );
}
