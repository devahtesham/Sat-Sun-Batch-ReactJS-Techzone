import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Loader from "./components/loader/Loader";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Route, Routes,BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
