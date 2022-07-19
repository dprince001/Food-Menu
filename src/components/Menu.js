import React from 'react';
import Item from './Item';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {

        return (
          <Item item={menuItem} key={menuItem.id}/>
        );
      })}
    </div>
  );
};

export default Menu;