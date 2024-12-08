import React, { useEffect, useRef, useState } from "react";

import pic1 from "static/images/logo.png";
import { NavLink } from "react-router-dom";
import { ModalMobileMenu } from "./modalNavBar";

const MenuDesktop = () => {

  

  return (
    
      <ul className="menu__list">
        <li className="menu__list-item">
          <nav className="menu__list-link">
            Компания
          </nav>
          <ul className="sub-menu__list">
            <li>
              <NavLink to="/optovics" className="sub-menu__list-link ">
                Оптовикам
              </NavLink>
            </li>
            <li>
              <NavLink to="/producers" className="sub-menu__list-link">
                Постовщикам
              </NavLink>
            </li>
            <li>
              <NavLink to="/galery" className="sub-menu__list-link">
                Галерея
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="menu__list-item">
          <nav className="menu__list-link">
            Каталог продукции
          </nav>
          <ul className="sub-menu__list">
            <li>
              <NavLink to="/venics" className="sub-menu__list-link ">
                банные веники
              </NavLink>
            </li>

            <li>
              <NavLink to="/news" className="sub-menu__list-link">
                Новинки
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="menu__list-item">
          <NavLink to="/contacts" className="menu__list-link">
            КОНТАКТЫ
          </NavLink>
        </li>
      </ul>
    
  );
};

const MenuMobile = () => {

    const [ show, setShow ] = useState(false)


    const handleClick = () => {
        setShow(true)
        
    }

    const closeMenu = () => {
       setTimeout(() => setShow(false), 180)
       const el = document.querySelector('.menu__mobile');
       el.classList.add('end')
    }


  return (
    <nav>
        
        
          {!show ? <div onClick={handleClick} className="burger-menu">
            <div></div>
            <div></div>
            <div></div>
            </div>
             : <ModalMobileMenu closeMenu={closeMenu} />  
            }
            
        
    </nav>
  );
};



export const Header = ({ templ }) => {
  const [el, setEl] = useState(<MenuDesktop />);
  const headerRef = useRef();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([{ target }]) => {
      const boundingClientRect = target.getBoundingClientRect();

      if (boundingClientRect.width <= 760) {
        setEl(<MenuMobile/>);
        return;
      }
      setEl(<MenuDesktop />);
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
  }, []);


  return (
    <header ref={headerRef} className={`header ${templ}`}>
      <div className="container">
        <div className="header__inner">
          <NavLink to="/" className="logo">
            <img className="logo__img logo-img" src={pic1} alt="" />
          </NavLink>


          {el}
        </div>
      </div>
    </header>
  );
};
