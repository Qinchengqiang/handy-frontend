import React from 'react'
import {connect} from 'react-redux'
import * as TodoActions from '../../redux-kong/actions'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import ProductItem from './ProductsContainer/ProductList/ProductItem'


const Detail = ({match,dispatch,cart,count, product}) => {
  const handleradd = () => {
    dispatch(TodoActions.inaddproduct(match.params.topicId))
  }
  const handlerdec = () => {
    const id = match.params.topicId
    dispatch(TodoActions.deccount(match.params.topicId))
    if (!(cart.quantityId[id])) {
      dispatch(TodoActions.decproduct(match.params.topicId))
    }
  }

  const id = match.params.topicId
  const product = count[id]
  var Addtoggle;
  if (!(cart.quantityId[id]) || cart.addIds.indexOf(id) === -1) {
    Addtoggle = <a onClick={ handleradd } className="buy">加入购物车</a>
  } else {
    Addtoggle = <div className="detail-cart">
      <a onClick={ handleradd } className="toggle-add">+</a>
      <div className="toggle-num">{cart.quantityId[match.params.topicId]}</div>
      <a onClick={ handlerdec } className="toggle-add">-</a>
    </div>
  }
  return (
    <div className="detail fl">
              
          <div className="toggle">
            {Addtoggle}
          </div>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count.byId,
  cart: state.cart
})


Detail.PropTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cur_price: PropTypes.string.isRequired,
    pre_price: PropTypes.string,
    star: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired
}

export default connect(
  mapStateToProps
)(Detail)