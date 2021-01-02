/** @format */
import React, {Component} from 'react'
import "./App.css";
import Hero from "./Hero.js"
import {BrowserRouter, Route} from "react-router-dom"
 class App extends Component {
   render() { 
     return ( 
       <div>
         <BrowserRouter>
         <Route exact path={"/"} component={Hero}/></BrowserRouter>
       </div>
      );
   }
 }
  
 export default App;

