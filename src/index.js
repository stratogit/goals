import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter, Route,Link} from 'react-router-dom';
import {firebaseApp} from './Firebase'
import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';

firebaseApp.auth().onAuthStateChanged(user=>{
    if (user){
        console.log('user has signed in or up',user);
    }else{
        console.log('user has signed out or sign in again')
    }
})



ReactDOM.render(

    <BrowserRouter>
        <div>
        <Route path="/" component={App} />>
        <Route path="/Signin" component={Signin} />>
        <Route path="/Signup" component={Signup} />>
        </div>
    </BrowserRouter>, 
    document.getElementById('root')
)