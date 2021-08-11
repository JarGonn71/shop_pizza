import axios from "axios";

const SET_PIZZAS = 'SET_PIZZAS'
const UPDATE_LOADED = 'UPDATE_LOADED'

const initialState = {
    items:[],
    isLoaded: false
}

const pizzasReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case UPDATE_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }

}

export const setPizzas = (dataPizzas) => {
    return {
        type: SET_PIZZAS, payload: dataPizzas
    }
}

export const updateLoaded = (data) => {
    return {
        type: UPDATE_LOADED, payload: data
    }
}

export const fetchPizzas = (category, sortBy) => (dispatch)=>{
    dispatch(updateLoaded(false))
    axios.get(`/pizzas?${category !==null? `category=${category}`:''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then((r)=>{
        dispatch(setPizzas(r.data))
    })
}


export default pizzasReducer