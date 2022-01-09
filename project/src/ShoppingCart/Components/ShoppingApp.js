import React from 'react'
import ShoppingRouter from '../Router/ShoppingRouter'
import {Provider} from 'react-redux';
import {store} from '../ReduxState/Store.js'

// Main app component, it contains redux store, 
// shopping router component wrapped using redux Provider component
let ShoppingApp = () => {

    return (

        <div>

            <Provider store={store}>

                <ShoppingRouter/>
                
            </Provider>
            
        </div>
    )
}

export default ShoppingApp
