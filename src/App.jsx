import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import BrandsMenu from "./Components/BrandsMenu";
import AboutUs from "./Components/AboutUs";
import HotPurchase from "./Components/HotPurchase";
import WhatsNew from "./Components/WhatsNew";
import Promotions from "./Components/Promotions";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <div className="mx-5">
        <Navbar />
        <Header/>
        <BrandsMenu />
      </div>
      <AboutUs />
      <HotPurchase/>
      <WhatsNew/>
      <Promotions/>
      <Customers/>
      <Footer/>
    </div>
  );
};

export default App;
