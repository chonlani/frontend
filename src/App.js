import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap';
import Home from '/components/Home'
import About from '/components/About'
import Footer from '/components/Footer'
import Header from '/components/Header'
import Product from '/components/Product'
import Users from '/components/Users'
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Headers>
        <Container fluid={true}>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/product"  component={Product} />
          <Route path="/users"  component={Users} />
          
        </Container>
      </Headers>
      
    </div>
  );
}

export default App;
