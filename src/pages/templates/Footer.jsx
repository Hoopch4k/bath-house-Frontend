import React from 'react'
import { NavLink } from 'react-router-dom'


export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <nav className="footer__menu">
                <ul className="footer__menu-list">
                     <li className="footer__menu-item">
                        <NavLink className="footer__menu-title" to="/company">Компания</NavLink >
                    </li>
                    <li className="footer__menu-item">
                        <NavLink className="footer__menu-link" to="/optovics">Оптовикам</NavLink >
                    </li>
                    <li className="footer__menu-item">
                        <NavLink className="footer__menu-link" to="/producers">Постовщикам</NavLink >
                    </li> 
                    <li className="footer__menu-item">
                        <NavLink className="footer__menu-link" to="/galery">Галерея</NavLink >
                    </li>
                </ul>
                <ul className="footer__menu-list">
                     <li className="footer__menu-item">
                        <p className="footer__menu-title" to="/catalog-products">Каталог продукции</p>
                    </li>
                    <li className="footer__menu-item">
                        <NavLink className="footer__menu-link" to="/venics">Банные веники</NavLink >
                    </li> 
                    {/* <li className="footer__menu-item">
                        <NavLink className="footer__menu-link" to="/bath-packs">Банные наборы</NavLink >
                    </li>  */}
                    <li className="footer__menu-item">
                        <NavLink className="footer__menu-link" to="/news">Новинки</NavLink >
                    </li> 
                </ul>
            </nav>
            <div className="footer__copy">
                <p className="footer__copy-text">
                    Вся представленная на сайте информация, касающаяся характеристик продуктов и стоимости товаров, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437(2) Гражданского кодекса Российской Федерации. Для получения подробной информации о наличии и стоимости указанных товаров и (или) услуг, пожалуйста, обращайтесь к менеджерам компании по телефону +7 (8362) 63-65-80
                </p>
            </div>
        </div>
    </footer>
  )
}
