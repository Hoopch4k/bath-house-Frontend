import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <nav className="footer__menu">
                <ul className="footer__menu-list">
                     <li className="footer__menu-item">
                        <a className="footer__menu-title" href="/company">Компания</a>
                    </li>
                    <li className="footer__menu-item">
                        <a className="footer__menu-link" href="/optovics">Оптовикам</a>
                    </li>
                    <li className="footer__menu-item">
                        <a className="footer__menu-link" href="/producers">Постовщикам</a>
                    </li> 
                    <li className="footer__menu-item">
                        <a className="footer__menu-link" href="/galery">Галерея</a>
                    </li> 
                </ul>
                <ul className="footer__menu-list">
                     <li className="footer__menu-item">
                        <p className="footer__menu-title" href="/catalog-products">Каталог продукции</p>
                    </li>
                    <li className="footer__menu-item">
                        <a className="footer__menu-link" href="/veniks">Банные веники</a>
                    </li> 
                    <li className="footer__menu-item">
                        <a className="footer__menu-link" href="/bath-packs">Банные наборы</a>
                    </li> 
                    <li className="footer__menu-item">
                        <a className="footer__menu-link" href="/news">Новинки</a>
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
