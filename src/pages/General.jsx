import React from 'react'


import bg from 'static/images/bb1.jpg'
import icon1 from 'static/images/photo1718533473 (5).jpeg';
import icon2 from 'static/images/photo1718533473 (2).jpeg';
import icon3 from 'static/images/photo1718533473 (4).jpeg';
import icon4 from 'static/images/photo1718533473 (1).jpeg';
import icon5 from 'static/images/Picsart_24-07-08_21-06-53-770 (1).png';
import pic1 from 'static/images/ozon.png'
import pic2 from 'static/images/megamar.jpg'

import { News } from './News';
import { NavLink } from 'react-router-dom';






export const General = () => {
    
  return (
    <>
        <section className="top">
            <div className="container">
                <h1 className="title">
                    Производим лучшие веники России 
                </h1>
            </div>
        </section>
        <div className="slider">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{backgroundImage: `url(${bg})`}}></div>
                </div>
            </div>
        </div>
        <section className="preim">
            <div className="container">
                <h1 className="section__title">Сотрудничество с нами </h1>
                <ul className="preim__list">
                    <li className="preim__item">
                        <img className="preim__item-img" src={icon1} alt=""/>
                        <p className="preim__item-text">
                           Качественное и натуральное сырье
                        </p>
                    </li>
                    <li className="preim__item">
                        <img className="preim__item-img" src={icon2} alt=""/>
                        <p className="preim__item-text">
                            Использование в производстве
                            собственных уникальных разработок
                        </p>
                    </li>
                    <li className="preim__item">
                        <img className="preim__item-img" src={icon3} alt=""/>
                        <p className="preim__item-text">
                            Доставим в любую точку мира
                        </p>
                    </li>
                    <li className="preim__item">
                        <img className="preim__item-img" src={icon4} alt=""/>
                        <p className="preim__item-text">
                            365 дней наличие товара
                        </p>

                    </li>
                    <li className="preim__item">
                        <img className="preim__item-img" src={icon5} alt=""/>
                        <p className="preim__item-text">
                            Гарантия возврата если товар не соответсвует стандартам качества
                        </p>
                        
                    </li>
                </ul>
            </div>
        </section>
        <section className="mp">
            <div className="container">
                <h1 className="section__title">Заказать нашу продукцию на маркетплейсах</h1>
                    <div className="mp__inner">
                        <div className="mpx">
                            <a href="https://www.ozon.ru/seller/pushkari-2132825/dom-i-sad-14500/?miniapp=seller_2132825" target="blank">
                                <img src={pic1} alt=""/>
                            </a>
                        </div>
                        <div className="mpx">
                            <NavLink target="blank">
                                <img src={pic2} alt=""/>
                            </NavLink>
                        </div>
                    </div>
            </div>
        </section>
        <News max={2} />
        
    </>
  )
}
