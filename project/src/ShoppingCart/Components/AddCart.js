import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSelectedProduct } from '../ReduxState/AddCartActions.js'

// to display customer selected product items  in table along with total amount and bill process
let AddCart = () => {
   
    // importing selected items from redux state - addcartitems - addCartReducer
    const selectedItems = useSelector(state => state.addcartitems.selectedItem);

    // useDispatch declaration
    let dispatch = useDispatch();
    

         let totalAmount = 0 ;

          //calculating total amount of  product price in add cart
          selectedItems.forEach(product => {

             totalAmount = totalAmount + product.price;          
        
            })

    return (

        <div className='text-center'>
            <h4 className='text-danger p-2'>Order Product Lists</h4>
            <table className='table table-striped table-warning'>
                <thead className='text-success h5'>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {
                        //render all selected product items as row in table body
                        selectedItems.length > 0?selectedItems.map((product,index)=>{
                            
                            return(<Fragment key= {product.id}>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{product.title}</td>
                                            <td>{product.category}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                {/*onClick event dispatches action to remove items from add cart */}
                                                <button 
                                                        className='btn btn-sm btn-danger' 
                                                        onClick={()=>dispatch(removeSelectedProduct(product))}>
                                                        Remove
                                                </button>
                                            </td>
                                        </tr>
                                </Fragment>)
                        }):null
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td><h4>Total:</h4></td>
                        <td><h4>{totalAmount}</h4></td>
                        <td>
                                {/* bill processing button  */}
                                <button 
                                        className="btn btn-success"
                                        onClick={() => {}}>
                                        Payment Process
                                </button>
                        </td>
                    </tr>
                </tbody>
            </table>
                
        </div>
    )
}

export default AddCar