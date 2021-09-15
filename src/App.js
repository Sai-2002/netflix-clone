import React, {useEffect} from 'react';
import './App.css';
import Homescreen from './screens/homescreen/Homescreen';
import LoginScreen from './screens/Login/LoginScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import {auth} from "./firebase";
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {login,logout,selectUser} from "./features/counter/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
          //Login In
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            })
          );
      }else{
        // Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);


  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen/>
        ):
        (
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/">
            <Homescreen />
           </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
