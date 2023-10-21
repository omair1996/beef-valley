import React from 'react';
import  './App.css';



const Order = ({ orderStatus }) => {


  return (
    <div className='card'>
      <div className='card-header'><h2 className='text-center'><i>You Ordered </i></h2></div>
      <div className='card-body'>
        {orderStatus.length === 0 ? (
          <div style={{fontSize:'20px',fontFamily:'-moz-initial'}}>Your order is empty. Add to cart before ording</div>
        ) : (
          <div className='list-group'>
            {orderStatus.map((item, index) => (
              <div className='list-group-item'key={index} > 
              <div><img src={item.img}  className="img-thumbnail" style={{height:'300px'}} alst={item.name}/></div>
                {item.name} - ₦{item.price.toFixed(2)}
              </div>
            ))}
          </div>
        )}
        
      </div>
      
      <div>
        <h2 className=' card-header text-center'>
          <i>Order status</i></h2>
        <div style={{border:'solid 1px black',borderRadius:'10px', padding:'2px', marginTop:'15px'}}>
          {orderStatus.length === 0  ? (<div style={{backgroundColor:'whitesmoke',border:'solid 1px black'}}></div>) : (<div className="split-element card-header"  >
            
            <h3 className='text-center'>Processing </h3></div>)}
        </div>
      </div>
    </div>

    
  );
};

export default Order;