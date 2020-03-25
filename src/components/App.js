import React from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import Index from '../components/Pages/Index';
import Home from '../components/Pages/Home';
import About from '../components/Pages/About';
import Shop from '../components/Pages/Shop';

// import Login from '../routes/Login';
// import Register from '../routes/Register';

import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Banner} />
      <Navbar />
      <Route exact path="/" component={Index} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
    </>
  );
};

export default App;
