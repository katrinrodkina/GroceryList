import React from 'react'
import AddGrocery from './AddGrocery'
import GroceryList from './GroceryList'
import Footer from './Footer'

const App = () => (
  <div className="app">
    <img src="groceries.png" alt="Groceries" width="500" />
    <div className="list">
      <AddGrocery />
      <GroceryList />
      <Footer />
    </div>
  </div>
)

export default App
