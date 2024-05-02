import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar = () => {
  return (
    <div>
      <h1>NewSeason Store</h1>
      <Link to="/basket"><AddShoppingCartIcon/></Link>
    </div>
  )
}

export default Navbar