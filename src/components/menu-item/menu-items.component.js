import React from 'react';
import './menu-items.style.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div  style={{backgroundImage: `url(${imageUrl})`}} 
        className="menu-item__background-image"></div>
        <div className="menu-item__content">
            <h1 className="menu-item__content--title"> {title.toUpperCase()}</h1>
            <h2 className="menu-item__content--subtitle"> SHOP NOW</h2>
        </div>
    </div>
)

export default MenuItem;