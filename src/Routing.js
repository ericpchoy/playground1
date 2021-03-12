

import React, { Fragment, useEffect, useState } from 'react';
import App from './App' ;
import Rooter from './components/Rooter/Rooter' ;
import Lottery from './components/Lottery/Lottery'
import Carousel from './components/Carousel/Carousel';
import Dashboard from './components/Dashboard/Dashboard';
import Visualizations from './components/Visualizations';
import EditRecord from './components/EditRecord/EditRecord';
import Login from './components/Login/Login';
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from '@material-ui/core/LinearProgress';
import {
    Switch,
    Route,
    Redirect,
    useHistory
  } from "react-router-dom";


function Routing() {
  const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();
      const history= useHistory()

    console.log( isLoading,
        isAuthenticated,
        error,user,'DATA FROM AUTHO')
 
      
//
// adminstritor enter 
// if(isLoading) {
// return <Spinner />

// }



    return (
        <div>
            <Switch>
            <Route path="/app" component={App} />                   
            <Route path="/lottery" component={Lottery} />                   
            <Route path="/carousal" component={Carousel} />                   
            <Route path="/visualizations" component={Visualizations} />                   
            <Route path="/editrecord" component={EditRecord} />                   
            <Route path="/login" component={Login} />                   
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Rooter} />   

            {/* {isAuthenticated && user.email==='sachin@wynisco.com'
          ? <Route path="/dashboard" component={Dashboard} />
          : <Route path="/dashboa" component={Login} />
          
        } */}

           </Switch>
        </div>
    )
 

}

export default Routing