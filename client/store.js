import { createStore } from 'redux'

const initialState = {
  groceries: []
}

const ADD_GROCERY = 'ADD_GROCERY'

let nextId = 0
export const addGrocery = text => {
  return {
    type: ADD_GROCERY,
    id: nextId + 1,
    text
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false
      }
      return { ...state, groceries: [...state.groceries, newGrocery] }
    default:
      return state
  }
}

const store = createStore(reducer)


store.dispatch(addGrocery("Milk"))
store.dispatch(addGrocery("Bread"))

export default store
