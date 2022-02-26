import { useState } from 'react';
import initialState from '../initialState';

let idCartr = 0;
const useInitialState = () => {
  const [state, setState] = useState(initialState);
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
    addToCart,
    removeFromCart,
    addtoBuyer,
    addNewOrder,
  };
};
export default useInitialState;
