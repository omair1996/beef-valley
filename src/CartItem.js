import React from 'react';



const CartItem = ({ item, removeFromCart }) => {
  return (
  
      <div className='card mb-4'>
        <div className='card-body'>
      <div><img src={item.img}  className="img-thumbnail" style={{height:'300px'}} alst={item.name}/></div>
     <div className="card-title">{item.name}</div>
     <div classNmae="card-text">price: ₦{item.price.toFixed(2)} </div>
     <button className="btn btn-danger" onClick={() => removeFromCart(item.id,item.name)}>Remove</button>
      </div>
      </div>
  );
};

export default CartItem;