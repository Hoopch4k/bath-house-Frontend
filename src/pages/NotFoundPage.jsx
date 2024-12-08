import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div style={{margin: "50px 0"}} >
        <h1>Страница не найдена</h1>
        
        <NavLink to="/">
            <p style={{color: "black", textDecoration: "underline"}}>Вернуться на главную страницу</p>
        </NavLink>
        
    </div>
  )
}
