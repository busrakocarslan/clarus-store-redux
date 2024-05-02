import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const getProduct = async () => {
    try {
      const URL = `https://fakestoreapi.com/products`;

      const res = await axios(URL);
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  const filterProduct = () => {
    if (category === "") {
      return products;
    } else {
      return products.filter((product) => product.category == category);
    }
  };

  return (
    <div>
      <button onClick={() => setCategory("")}>ALL</button>
      <button onClick={() => setCategory("electronics")}>Electronics</button>
      <button onClick={() => setCategory("jewelery")}>Jewelery</button>
      <button onClick={() => setCategory("men's clothing")}>Men</button>
      <button onClick={() => setCategory("women's clothing")}>Women</button>

      {filterProduct().map((item) => (
        <ProductCard key={item.id} {...item}  />
      ))}
    </div>
  );
}; // useEffecti bir fonc içinde kullanmadığım için hata aldım

export default Home;
