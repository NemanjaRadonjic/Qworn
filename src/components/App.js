import React from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import Index from '../components/Pages/Index';
import Home from '../components/Pages/Home';
import About from '../components/Pages/About';
import Shop from '../components/Pages/Shop';

import { BannerStatusContextProvider } from '../contexts/BannerStatusContext';

import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BannerStatusContextProvider>
        <Route exact path="/" component={Banner} />
        <Navbar />
        <Route exact path="/" component={Index} />
      </BannerStatusContextProvider>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
    </>
  );
};

export default App;
