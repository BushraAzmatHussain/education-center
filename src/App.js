import logo from './logo.svg';
import './App.css'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import More from './components/More/More';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';


function App()  {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
      </Route>

      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/service">
        <Service></Service>

      </Route>

      <Route path="/More">
        <More></More>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route>
        <NotFound></NotFound>
      </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;