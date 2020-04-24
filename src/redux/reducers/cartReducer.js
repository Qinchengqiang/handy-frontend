import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../constants/cartConstants'


const initState = {
    items: [
      {
        "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/Corvus-Madonna-Mid-Century-Walnut-and-Black-Finish-Accent-Chair-fa4c44ee-599c-4fe1-830c-c98e5402e80a_2048x2048.jpg?v=1532297208",
        "title": "Mid-Century Walnut and Black Finish Accent Chair",
        "cur_price": 49,
        "pre_price": 96,
        "star": "851",
        "id": 1,
        "inventory": 99,
        "desc": "psum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing elit. ",
        "category": "Best Sellers"
      },
      {
        "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/Altea-3-light-Satin-Nickel-Flush-Mount-Chandelier-a1b70dfb-73c1-4e09-9ac0-16732c9d604c_2048x2048.jpg?v=1533142129",
        "title": "Three-Light Satin Nickel Flush Mount Chandelier",
        "cur_price": 59,
        "pre_price": 100,
        "star": "308",
        "id": 2,
        "inventory": 99,
        "desc": "psum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing elit. ",
        "category": "Best Sellers"
      },
      {
        "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/Conrad-Bevel-Mirrored-Frame-Rectangular-Accent-Wall-Mirror-by-iNSPIRE-Q-Bold-3eb26b57-58dd-47dd-b288-4b12fce8f06f_2048x2048.jpg?v=1533141193",
        "title": "Bevel Mirrored Frame Rectangular Accent Wall Mirror",
        "cur_price": 62,
        "pre_price": 88,
        "star": "91",
        "id": 3,
        "inventory": 99,
        "desc": "psum dolor sit amet consectetur adipisicing elit. psum dolor sit amet consectetur adipisicing elit. ",
        "category": "Best Sellers"
      

  },
  {
    "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/5kbtu_2048x2048.png?v=1525382461",
    "title": "Frigidaire 5,000 BTU Window-Mounted Air Conditioner",
    "cur_price": 88,
    "pre_price": 99,
    "star": "55",
    "id": 4,
    "inventory": 99,
    "category": "Air Containers"
  },
  {
    "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/10kbtu_2048x2048.png?v=1525382498",
    "title": "Frigidaire 10,000 BTU Window-Mounted Air Conditioner",
    "cur_price": 120,
    "pre_price": 217,
    "star": "308",
    "id": 5,
    "inventory": 99,
    "category": "Air Containers"
  },
  {
    "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/12kbtu_copy_2048x2048.png?v=1525382481",
    "title": "Frigidaire 12,000 BTU Window-Mounted Air Conditioner",
    "cur_price": 420,
    "pre_price": 500,
    "star": "91",
    "id": 6,
    "inventory": 99,
    "category": "Air Containers"
},
{

    "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/Priage_Quick_Lock_14-inch_Metal1_2048x2048.png?v=1529603817",
    "title": "Quick Lock 14-inch Metal Platform Bed Frame",
    "cur_price": 129,
    "pre_price": 300,
    "star": "22",
    "id": 7,
    "inventory": 99,
    "category": "Beds"
  },
  {
    "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/VECELO_Headboard___Footboard_2048x2048.png?v=1529603509",
    "title": "Platform Bed Frame, Box Spring Replacement with Headboard and Footboard",
    "cur_price": 88,
    "pre_price": 120,
    "star": "308",
    "id": 8,
    "inventory": 99,
    "category": "Beds"
  },
  {
    "image": "https://cdn.shopify.com/s/files/1/2531/4912/products/VECELO_Headboard1_2048x2048.png?v=1529603568",
    "title": "Platform Bed Frame, Box Spring Replacement with Headboard",
    "cur_price": 47,
    "pre_price": 55,
    "star": "91",
    "id": 9,
    "inventory": 99,
    "category": "Beds"
}
    ],
    addedItems:[],
    total: 0

}
export const cart= (state = initState,action)=>{
   
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
              total: state.total + 12
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 12
        }}
    if(action.type === "LOAD_CART"){
      return {
        ...state,
        addedItems: action.addedItems
      }
    
  }
    
  else{
    return state
    }
    
}
