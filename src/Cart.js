import React from 'react';
import CartItem from './CartItem'; // Import the CartItem component



const Cart = ({ cartItem, removeFromCart, onPlaceOrder }) => {
  const calculateTotal = () => {
    return cartItem.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    onPlaceOrder();
    
    
  }
  return (
    <div className='card '>
      <div className='card-body '>
        <div className='card-title'><h2 className='text-center'><i>My Cart</i> </h2></div>
        
        
        {cartItem.lenght === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-10'>
            <div className='list-group-flush'>
              {cartItem.map((item) => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
              ))}
            </div>
            </div>
           
            <div  className='card-text'  style={{fontFamily:'-moz-initial',fontSize:'20px'}}>Total: ₦ {calculateTotal()}</div>
            <button className="btn btn-primary" onClick={handlePlaceOrder} >Order</button>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Cart;