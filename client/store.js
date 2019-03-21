import { createStore } from 'redux'

const initialState = {
  groceries: []
}

const ADD_GROCERY = 'ADD_GROCERY'

export const addGrocery = text => {
  return {
    type: ADD_GROCERY,
    id: nextId++,
    text
  }
}

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false
      }
      return { ...state, groceries: [...state.groceries, newGrocery] }
    default:
      return prevState
  }
}

const store = createStore(reducer)

export default store
