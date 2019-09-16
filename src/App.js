import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/product" component={Product}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/checkout" component={Checkout}/>
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
