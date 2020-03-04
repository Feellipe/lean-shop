import React from 'react';
import './menu-items.style.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div 
        style={{backgroundImage: `url(${imageUrl})`}} 
        className={`${size} menu-item`}>
        <div className="menu-item__content">
            <h1 className="menu-item__content--title"> {title}</h1>
            <h2 className="menu-item__content--subtitle"> SHOP NOW</h2>
        </div>
    </div>
)

export default MenuItem;