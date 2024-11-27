import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { General } from 'pages/General'
import { Contacts } from 'pages/Contacts'
import { Optovics } from 'pages/Optovics'
import { News } from 'pages/News'
import { NotFoundPage } from 'pages/NotFoundPage'

export const Routers = () => {





  return (
    <Routes>
        <Route path='/' element={<General/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/company' element={<Contacts/>} />
        <Route path='/optovics' element={<Optovics/>} />
        <Route path='/producers' element={<Contacts/>} />
        <Route path='/galery' element={<Contacts/>} />
        <Route path='/news' element={<News/>} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
