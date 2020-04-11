import {productsConstants}  from "../constants/productsConstants";

const initialState = {
  all: []
}

const all = (state = initialState, action) => {
  switch (action.type) {
      case productsConstants.RECEIVE_PRODUCTS:
          return action.products
      case productsConstants.ADD_TO_CART:
          const productId = action.product.id
          const productImage = action.product.image
          const product = state.find(item => item.id === productId)
          product.inventory--
          console.log('product', state)
          return [...state]
      default:
          return state
  }

}

export default (state = initialState, action) => {
  return {
      all: all(state.all, action)
  }
}

