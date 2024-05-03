import React from 'react'
import { Link } from 'react-router-dom'

const EmptyBasketTotal = () => {
  return (
    <div>
      <h1>
        You have no items in your shopping card, <Link to="/">Do you want add one?</Link>
      </h1>
    </div>
  )
}

export default EmptyBasketTotal