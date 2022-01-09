import { ALL_PRODUCTS_FAILURE, ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS } from "./ActionTypes";

let initialState = {
    loading:false,
    productlists:[],
    error:null
   
}

let ProductReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case ALL_PRODUCTS_REQUEST: return {
            ...state,
             loading: true
        }
        case ALL_PRODUCTS_SUCCESS: return {
            ...state,
            loading: false,
            productlists:payload
        }
        case ALL_PRODUCTS_FAILURE: return {
            ...state,
            loading: false,
            productlists:payload
        }
        default : return state;
    }

}
export {ProductReducer}