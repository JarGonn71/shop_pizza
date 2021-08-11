const SET_WIDTH_AND_LEFT = 'SET_WIDTH_AND_LEFT'
const SET_MODULE_WINDOW= 'SET_MODULE_WINDOW'

const initialState = {
    width: 55,
    left: 0,
    moduleWindow: false,
}

const effectReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_WIDTH_AND_LEFT:
            return{
                ...state,
                width: action.payload.width,
                left: action.payload.left
            }
        default:
            return state
    }
}


export const setWidthAndLeft = (width,left ) =>{
    return{
        type:SET_WIDTH_AND_LEFT,
        payload:{
            width,
            left
        }
    }
}


export default effectReducer