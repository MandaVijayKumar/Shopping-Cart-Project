import React from 'react';
import {Link} from 'react-router-dom';

// navigation component 
function Navbar() {

    return (
        <div style ={{backgroundColor : 'rgba(234,212,12,0.5)'}}>

                <nav className="navbar navbar-expand-lg navbar-warning bg-waring">

                            <div className="container-fluid">

                                    <Link to={'/'} className="navbar-brand h4 text-danger">ADAPT READY</Link>

                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                                        <li className="nav-item">
                                                           <Link to={'/'} className="navbar-brand">Home</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                           <Link to={'/addcart'} className="navbar-brand">Orders</Link>
                                                        </li>

                                                    </ul>
                                    </div>

                            </div>
                </nav>
                    
        </div>
    )
}

export default Navbar
