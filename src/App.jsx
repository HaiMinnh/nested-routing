import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductManagement from './component/ProductManagement.jsx';
import ListProduct from './component/pages/ListProduct.jsx';
import CreateProduct from './component/pages/CreateProduct.jsx';
import UpdateProduct from './component/pages/UpdateProduct.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<ProductManagement/>}>
           <Route index element={<ListProduct/>}></Route>
           <Route path='create-product' element={<CreateProduct/>}></Route>
           <Route path='update-product' element={<UpdateProduct/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App