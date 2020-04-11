import { productsConstants } from '../constants/productsConstants'
import * as shop from '../../api/shop'

export const reciveProducts = products => ({
  type: productsConstants.RECEIVE_PRODUCTS,
  products
})
export const AddToCart = product => ({
  type: productsConstants.ADD_TO_CART,
  product
})

export const getAllProducts = () => dispatch => {
  shop.getAllProducts(products => {
      dispatch(reciveProducts(products))
  })
}

export const setCheckoutStatus = status => ({
  type: productsConstants.SET_CHECKOUT_STATUS,
  status
})
export const setCartItems = items => ({
  type: productsConstants.SET_ITEMS,
  items
})

export const checkout = (products) => dispatch => {
  const savedCartProducts = [...products]
  dispatch(setCheckoutStatus(null))
  dispatch(setCartItems([]))
  shop.buyProducts(
      products,
      () => dispatch(setCheckoutStatus('successful')),
      () => {
          dispatch(setCheckoutStatus('failed'))
          dispatch(setCartItems(savedCartProducts))
      }
  )




}
