import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const FiiledBasketTotal = () => {
  const basketItems=useSelector(state=>state.basket)// useselector hook u ile reducer da oluşturduğumuz stati kullanıyoruz.
  console.log(basketItems);
  return (
    <div>
      <h2></h2>
      {basketItems.map(item =>(
      <ProductCard key={item.id}  image={item.image}
          description={item.description}
          title={item.title}
          category={item.category}
          price={item.price}
          quantity={item.quantity} />))}
    </div>
  )
}

export default FiiledBasketTotal