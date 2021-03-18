

import React, { Fragment, useEffect, useState } from 'react';
import App from './App' ;
import Rooter from './components/Rooter/Rooter' ;
import Lottery from './components/Lottery/Lottery'
import Carousel from './components/Carousel/Carousel';
import Dashboard from './components/Dashboard/Dashboard';
import Administration from './components/Administration';
import Visualizations from './components/Visualizations';
import EditRecordLauncher from './components/EditRecord/EditRecordLauncher';
import NewRecord from './components/EditRecord/NewRecord';
import NewCompany from './components/EditCompany/NewCompany';
import EditCompanyLauncher from './components/EditCompany/EditCompanyLauncher';
import Login from './components/Login/Login';
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from '@material-ui/core/LinearProgress';
import {
    Switch,
    Route,
    Redirect,
    useHistory
  } from "react-router-dom";
import EditRecord from './components/EditRecord/EditRecord';


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
            <Route path="/editrecord/:Id" component={EditRecordLauncher} />                   
            <Route path="/createnewrecord" component={NewRecord} />                   
            <Route path="/editcompany/:Id" component={EditCompanyLauncher} />                  
            <Route path="/createnewcompany" component={NewCompany} />                  
            <Route path="/createnewrecord" component={EditRecord} />                   
            <Route path="/login" component={Login} />                   
            <Route path="/administration" component={Administration} />
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


