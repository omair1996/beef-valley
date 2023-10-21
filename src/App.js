import React, { useState } from 'react';
import Header from './Header';
import Cart from './Cart';
import FoodMenu from './FoodMenu';
import About from './about';
import DrinkMenu from './drinkMenu';
import Order from './Order';
import Home from './Home';
import {BrowserRouter as Router, 
Routes, Route} from 'react-router-dom'


function App() {

  const [cartItem, setCartItem] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [order, setOrder] = useState([])
  

  const addToCart = (item) => {
    
    setCartItem([...cartItem, item]);
  };
 
 
  const removeFromCart = (itemId) => {
    const updatedCart = cartItem.filter(item => item.id !== itemId);
    setCartItem(updatedCart);

  };
  

  const handlePlaceOrder = () => {
    if(cartItem.length === 0){
      alert('warning ! cart is empty: add items');
    }else{
      alert('Order Successful: Thank you')
    }


    setCartItem([]);

    setOrderStatus([...cartItem]);
  };
  return (
    <div className="App" style={{fontFamily:'sans-serif'}}>
      
     <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/FoodMenu' element={<FoodMenu addToCart={addToCart} />}/>
      <Route path='/drinkMenu' element = {<DrinkMenu addToCart={addToCart}/>}/>
      <Route path='/Cart' element={<Cart cartItem={cartItem} removeFromCart={removeFromCart} onPlaceOrder={handlePlaceOrder} setOrderStatus={setOrderStatus}/>}/>
      <Route path='/Order' element={<Order order={order[order.length - 1]}  orderStatus={orderStatus}/> }/>
      <Route path='/about' element={<About/>}/>  
    </Routes>
    </div>
  );
}

export default App;
