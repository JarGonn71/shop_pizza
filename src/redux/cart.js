const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART'
const CLEAR_CART = 'CLEAR_CART'
const ADD_ONE_THIS_PIZZA = 'ADD_ONE_THIS_PIZZA'
const DELETE_ONE_THIS_PIZZA = 'DELETE_ONE_THIS_PIZZA'
const DELETE_PIZZAS_TO_CART = 'DELETE_PIZZAS_TO_CART'


const initialState = {
    items:{

    },
    countPizzas: 0,
    priceCart: 0

}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
       
        case ADD_PIZZA_TO_CART:{
            const newItems = {
                ...state.items,
                    [action.payload.id]: !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id], action.payload]
            }
          
            const arr = [].concat.apply([], Object.values(newItems))
            const price = arr.reduce((sum, obj)=> obj.finalPrice + sum, 0)

            return {
                ...state,
                items: newItems,
                countPizzas: arr.length,
                priceCart: price
            }

        }

        case DELETE_ONE_THIS_PIZZA:{
            const newItems = {
                ...state.items                      
            }
            {newItems[action.payload.id].length > 1
                ? newItems[action.payload.id].pop()
                : delete newItems[action.payload.id]
            }
            const arr = [].concat.apply([], Object.values(newItems))
            const price = arr.reduce((sum, obj)=> obj.finalPrice + sum, 0)

            return {
                ...state,
                items: newItems,
                countPizzas: arr.length,
                priceCart: price
            }
        }
            
        case DELETE_PIZZAS_TO_CART:{
            const newItems = {
                ...state.items        
            }
            delete newItems[action.payload.id]
            const arr = [].concat.apply([], Object.values(newItems))
            const price = arr.reduce((sum, obj)=> obj.finalPrice + sum, 0)

            return {
                ...state,
                items: newItems,
                countPizzas: arr.length,
                priceCart: price
            }
        }
           
        case CLEAR_CART:
            return{
                ...state,
                items: {},
                countPizzas: 0,
                priceCart: 0

            }

        default:
            return state
    }
}


export const addPizzasToCart=(payload)=>{

    return{
        type: ADD_PIZZA_TO_CART, payload
    }
}

export const deleteOnePizzas=(payload)=>{
    return{
        type: DELETE_ONE_THIS_PIZZA, payload
    }
}

export const deletePizzasToCart=(payload)=>{
  
    return{
        type: DELETE_PIZZAS_TO_CART, payload
    }
}

export const clearCart = ()=>{return{ type: CLEAR_CART }}

export default cartReducer