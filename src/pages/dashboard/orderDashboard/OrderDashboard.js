import React, {useState,useEffect} from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './orderDashboard.scss'
import axios from "axios";
// import {history} from '../../../redux/helpers/history'

function Ordercontainer (props){
     const {labelName, data, child, button} = props
    
    return (
        data?(<div>
            <label htmlFor="">{labelName}</label>
            <ul>
            {child}
            </ul> 
            {button}
        </div>):(
            <div>
        <div>seems no detail for {labelName} yet</div>
        <Link to='/shop'>continue shopping</Link>
        </div>)

    )
}


function OrderDashboard ({cart}){
    const [orderHistory,setOrderHistory] = useState([])
    const [wishlist,setWishlist] = useState([])
    useEffect(() => {
        const id = localStorage.getItem("_id")||""
         axios.get(`http://localhost:4000/api/user/${id}`)
            .then(({data})=>{
                console.log(data)
                const wishlist = data.wishlist
                const orderHistory = data.orderHistory
                setOrderHistory(orderHistory);
                setWishlist(wishlist)
                console.log(wishlist)
            })

    const handleWishlist = ()=>{
        
    }
        
        // console.log(apiData)
        // setwishlist(await Axios.post(`http://localhost:4000/api/wishlist/${id}`))
        // setOrderHistory(await Axios.post(`http://localhost:4000/api/orderHistory/${id}`))
        
       
    }, [])
    const renderWishlist = (data)=>{
        let sum = 0;
        return data.map((elem,index)=>{
            sum += elem.cur_price * elem.quantity
            return (
                <li key={index} className="orders-innercontainer">
                    <img src={elem.image||""} className="orders-img"/>
                    <div>{elem.title}</div>
                    <div>purchased {elem.quantity} units</div>
                    <div></div>
                    {(index === data.length -1)?<div>you spent total of {sum}</div>:null}
                </li>
            )
        })
    }
    return (
        <div >
            <Ordercontainer labelName="wishlist" data={cart} child={renderWishlist(cart)}>
               
            </Ordercontainer>
            <Ordercontainer labelName="OrderHistory" data={orderHistory}>
                
            </Ordercontainer>
        </div>
    )
}

export default connect(state=>{
    return {
        cart: state.cart.addedItems
    }
})(OrderDashboard)

