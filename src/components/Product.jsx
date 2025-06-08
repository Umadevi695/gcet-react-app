import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
//import "./Product.css";
export default function Product() {
  const { user, products, setProducts, cart, setCart } = useContext(AppContext);
  // const [products, setProducts] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const fetchProducts = async () => {
    const res = await axios.get(`${API}/products/all`, {
      header: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (id) => {
    !cart[id] && setCart({ ...cart, [id]: 1 });
  };

  return (
    <div>
      <style>{`
        .App-Product-Row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .App-Product-Row div {
          padding: 5px;
          margin: 5px;
          border: 1px solid gray;
        }
      `}</style>
      <h3>WELCOME {user.name}! </h3>
      <div className="App-Product-Row">
        {products &&
          products.map((value) => (
            <div key={value._id}>
              <h3>{value.name}</h3>
              <h4>{value.price}</h4>
              <button onClick={() => addToCart(value.pid)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}
