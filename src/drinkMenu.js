import React, { useState } from 'react';

const DrinkMenu = ({addToCart}) => {
// Sample list of drink items (you can add your  data)

const drinkItems = [
  {
    di: 17,
    name:'Mai tai',
    price: 1500,
    img:"image.jpg/mai tai.jpg"
  },
  {
    id: 18,
    name: 'Sunrise',
    price: 1500,
    img:"image.jpg/sunrise.jpg"

  },
  {
    id:19,
    name: 'Salty dog',
    price: 1500,
    img:"image.jpg/salty dog.jpg"
  },
  {
    id: 20,
    name:'Mojito',
    price: 1500,
    img:"image.jpg/mojito.jpg"
  },
  {
    id:21,
    name: 'Milkshake',
    price: 1500,
    img:"image.jpg/milkshake.jpg"
  },
{
  id: 22,
  name:'Black',
  price: 1500,
  img:"image.jpg/black.jpg"
},
{
  id:23,
  name:'Watermelon mojito',
  price: 1500,
  img:"image.jpg/watermelon majito.jpg"
},
{
  id:24,
  name:'Margerite',
  price: 1500,
  img:"image.jpg/margerite.jpg"
}
]

const handleAddToCart = (item) => {
  addToCart(item);
};

return (
  <div>
    <h2 className='text-center'> <i>Beef Valley drinks</i></h2>
    <div className="row">
      {drinkItems.map((item) => (
        <div className='col-lg-3 col-md-6 col-sm-10'
         key={item.id}>
          <div className="text-center card mb-4">
          <div><img src={item.img}  className="img-thumbnail" style={{height:'300px'}} alst={item.name}/></div>
            <div className="card-text">
              
              <div className="card-title"> <strong>{item.name}</strong></div>
              <div className='card-text'  style={{fontFamily:'-moz-initial',fontSize:'20px'}}>Price: ₦{item.price.toFixed(2)}</div>
              <div>
              <button
                className='btn btn-primary'
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
);
};

export default DrinkMenu;
