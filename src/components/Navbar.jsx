import { Box, Button, Stack, Typography, colors } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import { amber, blueGrey, orange, pink, red } from "@mui/material/colors";
import { type } from "@testing-library/user-event/dist/type";
import { Fullscreen } from "@mui/icons-material";
import { light } from "@mui/material/styles/createPalette";

const Navbar = () => {
  const navigate = useNavigate();
  const basket=useSelector(state=>state.basket)
  return (
    <Box display="flex" mx={2}  justifyContent="space-between"  sx={{backgroundColor: blueGrey[100], position:"fixed", top:0 , width:"95%"}} padding={1} paddingBlockStart={5} borderRadius="10px" boxShadow="2px 2px 5px "  >
      <Typography variant="h4" sx={{":hover":{cursor:"pointer"}}}  onClick={() => navigate("/")} color="primary" fontWeight="bolder" >
        NewSeason Store
      </Typography>
      <Link to="/basket" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <AddShoppingCartIcon color="primary" />
        {
          basket.length>0 && (<Typography variant="caption" component="span" sx={{backgroundColor:"amber.main", width:"1rem",height:"1rem", borderRadius:"50%", textAlign:"center", marginLeft:"-10px", marginBottom:"1rem" }} >{basket.length}</Typography>)//küçük bilgileri caption varidantı ile koyuyoruz. MUi de metin sitilini belirliyor//subtitle
        }
      </Link>
      
    </Box>
  );
};

export default Navbar;
