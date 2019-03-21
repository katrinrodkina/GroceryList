import React from 'react'
import GroceryItem from './GroceryItem'

const GroceryList = props => {
  return (
    <ul>
      {props.groceries.map(grocery => (
        <GroceryItem key={grocery.id} {...grocery} />
      ))}
    </ul>
  )
}

export default GroceryList
