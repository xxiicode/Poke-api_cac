import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './pages/landing'
import SignIn from './login/SignIn'
import { PelisPokemonC } from './components/PelisPokemonC'

export const App = () => {

  return (
    <>
    <SignIn/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
    </BrowserRouter>
    <Landing/>
    <PelisPokemonC/>
    <p className="text-center mb-0 mt-5 p-3 border-top bg-body"> CAC Grupo XVIII - 2024 ® </p>
    </>
  )
}
