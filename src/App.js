import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Other from './Other'
import Buy from './Buy'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/product' element={ <Product /> }></Route>
          <Route path='/other' element={ <Other /> }></Route>
          <Route path='/buy' element={ <Buy /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App