import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';
import Default from './components/Default';
import Home from './components/Home/Home';
import About from './components/About/About';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <main>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/tours" component={TourList}/>
        <Route component={Default}/>
      </Switch>
    </main>
  );
}

export default App;
