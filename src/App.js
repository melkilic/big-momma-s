/** @format */
import React, {Component} from 'react'
import "./App.css";
import Hero from "./Hero.js"
import Navbar from './Navbar.js'
import {BrowserRouter as Router, Route} from "react-router-dom"
 class App extends Component {
   render() { 
     return ( 
       <div>
         <>
         <Router>
         <Navbar/>
         <Route exact path={"/"} component={Hero}/>
         </Router>
         </>
       </div>
      );
   }
 }
  
 export default App;

