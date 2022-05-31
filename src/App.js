import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyNavbar from './Components/MyNavbar'
import Home from './Page/Home'
import Create from './Components/User/Create'
import Index from './Components/User/Index'
import Update from './Components/User/Update'
import TestForm from './Components/TestForm/TestForm'
import Show from './Components/User/Show'
import NotFound from './Page/NotFound/NotFound'
const App = () => {
  return (
    <div className='container'>
      <MyNavbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Users' element={<Index />} />
        <Route path='/Users/:id' element={<Show />} />
        <Route path='/Users/Update/:id' element={<Update />} />
        <Route path='/Users/:id' element={<Update />} />
        <Route path='/new-user' element={<Create />} />
        <Route path='/new-form' element={<TestForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
