import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Header ()  {
  return (
    <div className='navbar navbar-lg navbar-dark bg-dark ' style={{height:'60px'}}>
      <div className='row' style={{color:'whitesmoke'}}>
        <div className='col'>
      <Link className="navbar-brand" to='/'><img style={{height:'50px', width:'50px', borderRadius:'25px'}} src='image.jpg/logo.PNG' alst='logo'/></Link>
      </div >
          
            
            <div className='col'> <Link className="col nav-link" to='/'>Home</Link>
            </div>
            <div className='col'> <Link className="col nav-link" to='/FoodMenu'>Menu</Link>
            </div>

            <div className='col'><Link className="col nav-link" to="/drinkMenu">Drinks</Link>
            </div>
            
            <div className='col'><Link className="col nav-link" to="/Cart">Cart</Link>
            </div>
            
            <div className='col'><Link className="col nav-link" to='/Order'>Order</Link>
            </div>
            
            
            <div className='col'><Link className="col nav-link" to="/about">about</Link>
            </div>
          </div>
      </div>
    
  );
};

export default Header;