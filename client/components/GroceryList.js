import React from 'react'
import GroceryItem from './GroceryItem'
import { connect} from 'react-redux'

const GroceryList = props => (

<ul>
      {props.groceries.map(grocery => (
        <GroceryItem key={grocery.id} {...grocery} />
      ))}
    </ul>
  


)
  
    



const  mapStateToProps= (state)=> {
   return { groceries: state.groceries }

 }


 const  connectedList = connect( mapStateToProps) (GroceryList)

export default connectedList
