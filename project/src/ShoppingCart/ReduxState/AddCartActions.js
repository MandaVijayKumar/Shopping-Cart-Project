import {ADD_SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT} from './AddCartActionTypes.js'
export let addSelectedProduct = (product) => {
    return {
        type: ADD_SELECTED_PRODUCT,
        payload: product
    }
}
export let removeSelectedProduct = (product) => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
        payload: product
    }
}