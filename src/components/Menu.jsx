import React from 'react';
import '../assets/styles/components/Menu.scss';

const Menu = () => (
  <div>
    <input type='checkbox' className='checkbox' id='check' />
    <label className='menu' for='check'>|||</label>
    <div className='left-panel'>
      <ul className='lista'>
        <a href=''><li>devcode</li></a>
        <a href=''><li>cursos</li></a>
        <a href=''><li>blog</li></a>
      </ul>
    </div>
  </div>
);

export default Menu;
