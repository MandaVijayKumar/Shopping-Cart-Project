import React,{ useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './CSS/ProductList.css';
import loading from './Images/loading.gif';
import { allProductList } from '../ReduxState/Actions.js';
import { addSelectedProduct } from '../ReduxState/AddCartActions.js'
import { useSelector, useDispatch } from 'react-redux'
import AddCart from './AddCart.js';

// to display all product items on browser
let ProductList = () => {
    
    // importing all products data from redux global state - allproducts - productReducer
    let productLists = useSelector(state => state.allproducts.productlists);
    
    // importing only selected product item from redux global state - addcartitems - addcartReducer
    let addcartitems = useSelector(state => state.addcartitems.selectedItem);
    
    // useDispatch hook declaration
    let  dispatch = useDispatch();

    // useEffect call, only once after mounting
    useEffect( () => {

       // dispatch the action - allProductList() to get json data from fake api call 
       dispatch( allProductList() );   
    },[]);


    return (
        <Fragment>
            <div id = "addcart-container">
                {
                    // render AddCart component, if addcartitems contains atleast one selected item
                    addcartitems.length > 0 ? <AddCart/> : null  
                      
                } 
            </div>
           
           
            
        
            
            <div className='row' id="prouduct-background">
            {
                // render all product items 
                // loading gif image, if product list contains empty
                productLists.length === 0 ? <img src={loading} alt="...loading"/> : productLists.map((product) => {
                   
                    // returns card block for each product item
                    return(<div key={product.id} className='col-sm-4 '>
                     
                                <div className='card m-4'>

                                    <div className='card-header text-center'>
                                        <h4>{product.title}</h4>
                                    </div>

                                    <div className='card-body text-center'>

                                        {/* routing to product details component*/}
                                        <Link to={`/productDetails/${product.id}`} >
                                            <img src = {product.image} className='thuimg-thumbnail' alt='not found' />
                                        </Link>
                                        
                                    </div>

                                    <div className='card-footer footer'>

                                               {/*routing to product details componet and passing product id */}
                                               <Link to={`/productDetails/${product.id}`} className='btn btn-primary'>
                                                    <h4>Details</h4>
                                               </Link>

                                               <span><h4>Price : {product.price}</h4></span>    

                                               {/* onClick event dispatches action - addSelectedProduct & passes selected product item*/}
                                               <button 
                                                        className='btn btn-success' 
                                                        onClick={()=>dispatch(addSelectedProduct(product))}>
                                                        <h4>ADD CART</h4>
                                               </button>

                                    </div>

                                </div>
                        
                        
                        </div>);
                })
            }            
            </div>
            
       
            
            
        </Fragment>
    )
}

export default ProductList
