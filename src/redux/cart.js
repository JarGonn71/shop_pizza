const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART'

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

        default:
            return state
    }
}


export const addPizzasToCart=(payload)=>{
    return{
        type: ADD_PIZZA_TO_CART, payload
    }
}

export default cartReducer