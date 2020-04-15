import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../constants/productsConstants'


const initState = {
    items: [
      {
        "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/Corvus-Madonna-Mid-Century-Walnut-and-Black-Finish-Accent-Chair-fa4c44ee-599c-4fe1-830c-c98e5402e80a_2048x2048.jpg?v=1532297208",
        "title": "Mid-Century Walnut and Black Finish Accent Chair",
        "cur_price": 149,
        "pre_price": 196,
        "star": "851",
        "id": 1,
        "inventory": 1,
        "desc": "psum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing elit. ",
        "category": "Best Sellers"
      },
      {
        "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/Altea-3-light-Satin-Nickel-Flush-Mount-Chandelier-a1b70dfb-73c1-4e09-9ac0-16732c9d604c_2048x2048.jpg?v=1533142129",
        "title": "Three-Light Satin Nickel Flush Mount Chandelier",
        "cur_price": 149,
        "pre_price": 255,
        "star": "308",
        "id": 2,
        "inventory": 2,
        "desc": "psum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing elit. ",
        "category": "Best Sellers"
      },
      {
        "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/Conrad-Bevel-Mirrored-Frame-Rectangular-Accent-Wall-Mirror-by-iNSPIRE-Q-Bold-3eb26b57-58dd-47dd-b288-4b12fce8f06f_2048x2048.jpg?v=1533141193",
        "title": "Bevel Mirrored Frame Rectangular Accent Wall Mirror",
        "cur_price": 289,
        "pre_price": 329,
        "star": "91",
        "id": 3,
        "inventory": 99,
        "desc": "psum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing elit. ",
        "category": "Best Sellers"
      

  }
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         addedItem.inventory -= 1
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.cur_price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.cur_price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.cur_price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.cur_price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.cur_price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 60
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 60
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer