import React from 'react'
import { useSelector } from 'react-redux';
import FiiledBasketTotal from '../components/FiiledBasketTotal';
import EmptyBasketTotal from '../components/EmptyBasketTotal';

const Basket = () => {
  const basketItems = useSelector((state) => state.basket);
  return (
    <div>
      {basketItems.length > 0 ? <FiiledBasketTotal /> : <EmptyBasketTotal />}
    </div>
  )
}

export default Basket