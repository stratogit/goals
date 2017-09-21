import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Router, Route, BrowserRouter, withRouter} from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory';
import history from './history'
import { firebaseApp } from './Firebase';
import {logUser} from './actions';
import reducer from './reducers';


import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    
    if (user) {
       // console.log('user has signed in or up', user);
        const {email} =user;
        store.dispatch(logUser(email));
        history.push('/App')
       // this.props.createBrowserHistory.push('/App');
        
    } else {
        //console.log('user has signed out or sign in again');
        history.replace('/Signin')
       // this.props.createBrowserHistory.replace('/Signin');
    }
})



ReactDOM.render(
    <Provider store={store}>
    <Router path="/" history={history}>
        <div>
        <Route path='/app' component={App} />>
        <Route path='/Signin' component={Signin} />>
        <Route path='/Signup' component={Signup} />>
        </div>
    </Router>
     </Provider>,
    document.getElementById('root')
)

