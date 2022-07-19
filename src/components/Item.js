import React from "react";

const Item = ({ item }) => {

    const {img, title, id, price, desc} = item;

    return (
        <article key={id} className='menu-item'>
            <div className='photo-container'>
              <img src={img} alt={title} className='photo' />
            </div>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
    );
}

export default Item;