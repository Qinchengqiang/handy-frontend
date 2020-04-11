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
          const product = state.find(item => item.id === productId)
          product.inventory--
          console.log('product', product)
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

// const byId = (state = {}, action) => {
//   switch (action.type) {
//     case RECEIVE_PRODUCTS:
//       return {
//         ...state,
//         ...action.products.reduce((obj, product) => {
//           obj[product.id] = product;
//           return obj;
//         }, {}),
//       };
//     default:
//       return state;
//   }
// };

// const visibleIds = (state = [], action) => {
//   switch (action.type) {
//     case RECEIVE_PRODUCTS:
//       return action.products.map((product) => product.id);
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   byId,
//   visibleIds,
// });

// export const getProduct = (state, id) => state.byId[id];

// export const getVisibleProducts = state => {
//   console.log(state)
//   state.visibleIds.map((id) => getProduct(state, id));
// }
