import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import ItemDetailConteiner from "../Components/ItemDetailContainer/ItemDetailContainer";
import ItemListConteiner from "../Components/ItemListConteiner/ItemListConteiner";
import NavBar from "../Components/NavBar/NavBar";
import { CartProvider } from "../context/CartContext";
import Cart from "../views/Cart/Cart";
import Checkout from "../views/Checkout/Checkout";

const Router = () => {
  return (
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListConteiner />} />
            <Route path='/category/:id' element={<ItemListConteiner />} />
            <Route path='/item/:id' element={<ItemDetailConteiner />} />
            <Route path='/category/item/:id' element={<ItemDetailConteiner />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>  
  );
};

export default Router;
