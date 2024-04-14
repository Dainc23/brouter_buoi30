import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './Components/Contact';
import Home from './Components/Home';
import Header1 from './Components/Header1';
import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header1 />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path='/Contact' element={<Contact />}></Route>
                <Route path='/Product' element={<Product />}></Route>
                <Route path="Product/:id" element={<ProductDetail />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
