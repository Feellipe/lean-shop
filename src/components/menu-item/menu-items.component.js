import React from 'react';
import './menu-items.style.scss';
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (

    <div className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`)}>
        <div  style={{backgroundImage: `url(${imageUrl})`}} 
        className="menu-item__background-image"></div>
        <div className="menu-item__content">
            <h1 className="menu-item__content--title"> {title.toUpperCase()}</h1>
            <h2 className="menu-item__content--subtitle"> SHOP NOW</h2>
        </div>
    </div>
)

export default withRouter(MenuItem);