import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Box>
      <Typography variant='h4'component={Button} onClick={()=>navigate("/")} >NewSeason Store</Typography>
      <Link to="/basket"><AddShoppingCartIcon/></Link>
    </Box>
  )
}

export default Navbar