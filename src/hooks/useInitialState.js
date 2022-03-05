import { useState, useEffect } from "react";
import initialState from "../initialState";

// const API = 'http://localhost:1337/api/products?populate=%2A';
const API2 = "https://us-central1-gndx-fake-api.cloudfunctions.net/api";
let idCartr = 0;
const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(API2);
      const json = await response.json();
      setProducts(json);
    }
    getProducts();
  }, []);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, { ...payload, idCart: idCartr }],
    });

    idCartr += 1;
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };
  const addtoBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  return {
    state,
    products,
    addToCart,
    removeFromCart,
    addtoBuyer,
    addNewOrder,
  };
};
export default useInitialState;
