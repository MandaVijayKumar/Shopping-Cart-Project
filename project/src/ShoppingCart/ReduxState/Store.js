import {applyMiddleware,combineReducers, createStore} from 'redux'
import { ProductReducer } from "./ProductReducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { AddCartReducer } from './AddCartReducer';

let rootReducer = combineReducers({
    allproducts: ProductReducer,
    addcartitems: AddCartReducer,
});
let store = createStore(rootReducer, applyMiddleware(logger,thunk));
export {store};