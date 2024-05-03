import React from "react";
import { useDispatch } from "react-redux"; //??
import { addBasket, delBasket } from "../redux/action/basketAction";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const ProductCard = ({id, image, description, title, category, price }) => {
  const dispatch = useDispatch();
  const handleProduct = () => {
    dispatch(addBasket({id, image, description, title, category, price }));
    // console.log(addBasket());
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <p>{price} $</p>
      </CardContent>
      <CardActions>
       
        <Typography>
          {category}
        </Typography>
        <IconButton aria-label="share">
          <ShoppingBasketIcon onClick={handleProduct} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
