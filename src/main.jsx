import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacto } from './Routes/Contacto'
import { Details } from './Routes/Details'
import { Favs } from './Routes/Favs'
import { Home } from './Routes/Home'
import './main.css'
// import { DoctorsProvider } from './context/DoctorsContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <DoctorsProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/favourites' element={<Favs/>}/>
        </Routes>
      </BrowserRouter>
    {/* </DoctorsProvider> */}
  </React.StrictMode>,
)
