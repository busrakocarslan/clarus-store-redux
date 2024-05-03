import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Box, Button, Typography } from "@mui/material";
import {
  delBasket,
  minusBasket,
  plusBasket,
  removeProduct,
} from "../redux/action/basketAction";

const FiiledBasketTotal = () => {
  const basketItems = useSelector((state) => state.basket); // useselector hook u ile reducer da oluşturduğumuz stati kullanıyoruz.
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };
  const handlePlus = (id) => {
    dispatch(plusBasket(id));
  };
  const handleMinus = (id) => {
    const item=basketItems.find((item) => item.id === id) 
    if(item.quantity>1){
      dispatch(minusBasket(id));
    }
  };
  const handleClean = () => {
    dispatch(delBasket());
  };

  const basketFullPrice = () => {
    let fullPrice = 0;
    basketItems.forEach((item) => {
      fullPrice += item.price * item.quantity;
    });
    return fullPrice.toFixed(2);
  };

  //  const handleAction = (id, type) => {
  //   dispatch(type(id));
  // }; daha clean code için aşağıda da şöyle yazacaktın ör:handlePlus(id,plusBasket)
  console.log(basketItems);
  return (
    <Box>
      <h2></h2>
      {basketItems.map((item) => (
        <Box key={item.id}>
          <ProductCard
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            // price={(item.price * item.quantity).toFixed(2)}
            quantity={item.quantity}
          />
          <Box>
            <Button onClick={() => handleMinus(item.id)}>-</Button>
            <Typography>{item.quantity}</Typography>
            <Button onClick={() => handlePlus(item.id)}>+</Button>
          </Box>
          <Button onClick={() => handleRemove(item.id)}>REMOVE</Button>
        </Box>
      ))}
      <Box>
        <Typography>Subtotal:{basketFullPrice()} </Typography>

        <Button onClick={handleClean}>EMPTY CARD</Button>
      </Box>
    </Box>
  );
};

export default FiiledBasketTotal;
