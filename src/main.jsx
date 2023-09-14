import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Contacto } from './routes/Contacto'
import { Details } from './routes/Details'
import { Favs } from './routes/Favs'
import { Home } from './routes/Home'
import './main.css'
import { Notfound } from './routes/Notfound'
import { App } from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='/' element={<Navigate to={'/home'}/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/contact' element={<Contacto/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/favourites' element={<Favs/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
