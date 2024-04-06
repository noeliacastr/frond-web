import React from 'react';
import '../App.css';
import GenerarMenu from './GenerarMenu';
import MenuItems from '../MenuItems.json'

const MenuItem = () => {

    console.log(MenuItems);
    return (
      <div>
        <GenerarMenu menuItems={MenuItems} /> 
      </div>
    );
}
export default MenuItem;