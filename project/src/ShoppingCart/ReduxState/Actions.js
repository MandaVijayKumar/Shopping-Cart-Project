import axios from 'axios'
import {ALL_PRODUCTS_FAILURE, ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS} from './ActionTypes.js'

// All product on Request
let allProductRequest = ()=>{
    return {
        type: ALL_PRODUCTS_REQUEST,
        
    }
}

//  All product on success
let allProductSuccess = (products)=>{
    return {
        type: ALL_PRODUCTS_SUCCESS,
        payload: products
        
    }
} 

//All products on failure
let allProductFailure = (errors)=>{
    return {
        type:ALL_PRODUCTS_FAILURE,
        payload:errors
    }
}
//thunk middleware - asynchrnous call to get all product list 
let allProductList = ()=>{


    return (dispatch)=> {
        //calling action allProduct request
        dispatch(allProductRequest());
       
        //fetching facke appi data 
        axios.get('https://fakestoreapi.com/products').then((response)=>{

            //calling action - allProductsuccess
            dispatch(allProductSuccess(response.data));

        }).catch((error)=> {

            //calling action - allproductfailuer
            dispatch(allProductFailure(error))
        })
    }
}
export {allProductList}