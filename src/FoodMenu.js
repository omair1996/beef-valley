import React, { useState } from 'react';





const FoodMenu = ({ addToCart }) => {
  // Sample list of food items (you can add your  data)
  const foodItems = [
    {
      id: 1,
      name: 'Steak',
      price: 3500,
      img: "image.jpg/steak.JPG"
      
    },
    {
      id: 2,
      name: 'Minced ball box.',
      price: 2500,
      img:"image.jpg/minced ball.jpg"
      
    },
    {
      id: 3,
      name: 'Shawarma',
      price: 2000,
      img:"image.jpg/shawarma.jpg"
      
    },
    {
      id: 4,
      name: 'Beef floss (danbun nama)',
      price: 1000,
      img:"image.jpg/beef floss.jpg"
      
    },

    {
      id:5,
      name:'Bbq stick meat box.',
      price: 2500,
      img:"image.jpg/bbq stick-meat.jpg"

    },
    {
      id:6,
      name:'Steak and pepper soup',
      price:5000,
      img:"image.jpg/steak and pepper-soup.jpg"

    },
    {
      id:7,
      name: 'Tacos box',
      price: 2000,
      img:"image.jpg/tacos.jpg"

    },
    {
      id:8,
      name: 'Tacos with cheese box',
      price: 2500,
      img:"image.jpg/tacos with cheese.jpg"
    },
    {
      id:9,
      name: 'Roiled beef',
      price: 6000,
      img:"image.jpg/roiled beef.jpg"
    },
    {
      id:10,
      name: 'Hot dog',
      price: 1500,
      img:"image.jpg/hot dog.jpg"
    },
    {
      id:11,
      name: 'Minced milk',
      price: 7500,
      img:"image.jpg/minced milk.jpg"
    },
    {
      id:12,
      name:'Crispy chilli beef',
      price: 5000,
      img:"image.jpg/crispy chilli beef.jpg"
    },
    {
      id:13,
      name: 'Beef burger',
      price:2000,
      img:"image.jpg/beef buger.jpg"
    },
    {
      id:14,
      name:'Beef jerky (killish)',
      price: 1500,
      img:"image.jpg/beef jerky.jpg"
    },
    {
      id:15,
      name: 'Beef pizz',
      price: 5000,
      img:"image.jpg/beef pizza.jpg"
    },
    {
      id:16,
      name:'Menudo and potatoes',
      price: 4500,
      img:"image.jpg/menudo and potatoes.jpg"
    }
  ];
  
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <h2 className='text-center'> <i>Beef Valley Menu</i></h2>
      <div className="row">
        {foodItems.map((item) => (
          <div className='col-lg-3 col-md-6 col-sm-10'
           key={item.id}>
            <div className="text-center card mb-4">
            <div><img src={item.img}  className="img-thumbnail" style={{height:'300px'}} alst={item.name}/></div>
              <div className="card-text">
                
                <div className="card-title"><strong>{item.name}</strong></div>
                <div className='card-text' style={{fontFamily:'-moz-initial',fontSize:'20px'}}>Price: ₦{item.price.toFixed(2)}</div>
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

export default FoodMenu;