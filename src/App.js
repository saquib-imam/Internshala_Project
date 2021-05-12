import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Checkout from'./components/checkout/checkout';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Login from './components/login/login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { UseStateValue } from './context-api/StateProvider';

function App() {
  const [{},dispatch] = UseStateValue();
  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>',authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        
        
        <Switch>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/checkout">
            <Header/> 
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
