import React , {Component} from 'react' 
import {
       BrowserRouter as Router,
       Switch,
       Route,
     } from "react-router-dom";
import { connect } from 'react-redux'
import {add_reminder , deletereminder ,clearrlinder ,editereminder} from './action/actionliste'
import Home from "./pages/Home.jsx"
import Header from './components/header.jsx'
import background from "./assets/background.JPG"
import { CssBaseline, makeStyles } from '@material-ui/core';
import { useTheme  , ThemeProvider} from "@material-ui/core/styles";

function  App ()  {
       const theme = useTheme();
       return (

              <ThemeProvider theme={theme}>
              <Router>
                       
                        <div style={{
                                backgroundImage:`url(${background})`,
                                backgroundSize:"cover",
                                backgroundRepeat:"no-repeat"
                                
                                }}>
                                       <Header /> 
                     <CssBaseline />

                     
                     
                     
                 <Switch>
                  <Route path="/" exact>
                  <Home />
                  </Route>
                  
                 
                </Switch>
                </div>
              </Router>
              </ThemeProvider>
       )
     
  
}

export default App;
