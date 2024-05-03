import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";
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
    const item = basketItems.find((item) => item.id === id);
    if (item.quantity > 1) {
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
    <Box marginTop="10rem">
      <Box display="flex" justifyContent={"space-evenly"} flexWrap="wrap">
        {basketItems.map((item) => (
          <Box key={item.id}>
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600, p: 1, width: 250,boxShadow:"2px 2px 5px gray" }} id={item.id}>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt={item.title}
                sx={{ objectPosition: "center", objectFit: "contain" }}
              />
              <Box display="flex" justifyContent={"space-between"} gap={2}  m={1.5}>
              <Typography variant="body2" color="amber.dark">
          {item.title}
        </Typography>
        <Typography color="amber.dark">{item.price}$</Typography>
              </Box>
              <Box
               
                display="flex" justifyContent="flex-start" alignItems="center"
              >
                <Button onClick={() => handleMinus(item.id)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button onClick={() => handlePlus(item.id)}>+</Button>
                <Button variant="contained" onClick={() => handleRemove(item.id)}>REMOVE</Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
      <Box display="flex" justifyContent="space-evenly" alignItems="center" m={5}>
        <Typography color="primary" borderBottom="3px solid" p={1}>Subtotal :<span color="amber.main">{basketFullPrice()}$ </span></Typography>

        <Button  variant="contained" color="amber"  onClick={handleClean}>EMPTY CARD</Button>
      </Box>
    </Box>
  );
};

export default FiiledBasketTotal;
