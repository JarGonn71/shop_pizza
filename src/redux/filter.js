const SET_SORT_BY='SET_SORT_BY'
const SET_CATEGORY_BY ='SET_CATEGORY_BY'
const initialState = {
    category: null,
    sortBy: {
        name: 'по пулярности',
        type: 'rating',
        order: 'desc',
    },
}

const filterReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return{
                ...state,
                sortBy: action.payload
            }
        case SET_CATEGORY_BY:
            return{
                ...state,
                category: action.payload
            }
        default:
            return state

    }
}



export const setSort = (type) =>{
    return{
        type: SET_SORT_BY, payload: type
    }
}

export const setCategory = (category) =>{
    return{
        type: SET_CATEGORY_BY, payload: category
    }
}

export default filterReducer