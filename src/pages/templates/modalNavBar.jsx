import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const ModalMobileMenu = ({closeMenu}) => {


  const handleClick = (e, i) => {
    const elems = document.querySelectorAll(".switch-mark")
    const listElems = document.querySelectorAll(".list__menu__mobile")

    if (!elems[i]) return
    

    if (elems[i].classList.contains("active")) {
      
      listElems[i] && listElems[i].setAttribute("style", "display: none")
      
      elems[i].classList.remove("active")
      
    } else {
      listElems[i] && listElems[i].setAttribute("style", "display: flex")
      elems[i].classList.add("active")
      
      
    }

    
  }



  return (
    <ul className="menu__mobile">

      <nav onClick={closeMenu} className="close-btn">ЗАКРЫТЬ</nav>
      
      <li className='menu__mobile-list'>
        <article onClick={(e) => handleClick(e, 0)}>
          <p>КОМПАНИЯ</p> <div className='switch-mark'></div>
        </article>
        <ul className='list__menu__mobile'>
          <li>
            <NavLink to="/optovics">
              Оптовикам
            </NavLink>
          </li>
          <li>
            <NavLink to="/producers">
                Поставщикам
            </NavLink>
          </li>
          <li>
            <NavLink to="/galery">
                Галерея
            </NavLink>
          </li>
        </ul>
      </li>
      <li className='menu__mobile-list'>
        <article onClick={(e) => handleClick(e, 1)}>
          <p>КАТАЛОГ ПРОДУКЦИИ</p><div className='switch-mark'></div>
        </article>
        <ul className='list__menu__mobile'>
          <li>
            <NavLink to="/venics">
                Банные веники
            </NavLink>
          </li>
          <li>
            <NavLink to="/news">
                Новинки
            </NavLink>
          </li>
        </ul>
      
      </li>
      <NavLink to="/contacts" className='menu__mobile-list' >
        <article>
            КОНТАКТЫ
        </article>
      </NavLink>

    </ul>
  )
}
