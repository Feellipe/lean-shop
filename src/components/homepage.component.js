import React from 'react'
import './homepage.style.scss'

const HomePage = () => (
    <div className="homepage__container">
        <div className="homepage__directory">
            <div className="homepage__directory--menu-item">
                <div className="homepage__content">
                    <h1 className="homepage__content--title"> HATS</h1>
                    <h2 className="homepage__content--subtitle"> SHOP NOW</h2>
                </div>
            </div>
            <div className="homepage__directory--menu-item">
                <div className="homepage__content">
                    <h1 className="homepage__content--title"> jACKETS</h1>
                    <h2 className="homepage__content--subtitle"> SHOP NOW</h2>
                </div>
            </div>
            <div className="homepage__directory--menu-item">
                <div className="homepage__content">
                    <h1 className="homepage__content--title"> SHOES</h1>
                    <h2 className="homepage__content--subtitle"> SHOP NOW</h2>
                </div>
            </div>
            <div className="homepage__directory--menu-item">
                <div className="homepage__content">
                    <h1 className="homepage__content--title"> WOMENS</h1>
                    <h2 className="homepage__content--subtitle"> SHOP NOW</h2>
                </div>
            </div>
            <div className="homepage__directory--menu-item">
                <div className="homepage__content">
                    <h1 className="homepage__content--title"> MEN</h1>
                    <h2 className="homepage__content--subtitle"> SHOP NOW</h2>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;