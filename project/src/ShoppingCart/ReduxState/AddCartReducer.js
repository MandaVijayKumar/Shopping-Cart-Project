import { ADD_SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "./AddCartActionTypes";

let initialState = {
    selectedItem:[],
   
}
let AddCartReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case ADD_SELECTED_PRODUCT: return { 
            ...state,
            selectedItem: [ ...state.selectedItem, payload ]
        }
        case REMOVE_SELECTED_PRODUCT: return {
            ...state,
            selectedItem: state.selectedItem.filter((product)=>product.id !== payload.id)
        }
        default: return state
    } 

}
export {AddCartReducer};