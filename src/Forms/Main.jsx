import React from "react";
import "./page.css";

import { Route, Switch } from "react-router-dom";
import Education from "./Education";
import Navbar from "./Navbar";
import Password from "./Password";
import Personal from "./Personal";

const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="box">
            <Navbar/>
            
            <Switch>
        <Route exact path="/" component={()=>{
         return  <Personal/>
        }}/>
         <Route exact path="/Education" component={()=>{
         return  <Education/>
        }}/> <Route exact path="/Password" component={()=>{
         return  <Password />
        }}/>
      </Switch>
        </div>
      </div>
    </div>
  );
};

export default Main;
