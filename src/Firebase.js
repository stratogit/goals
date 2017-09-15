import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC11dHq6z2EZAbl1dbhyyqYvaCCKn1IAJ0",
  authDomain: "goals-268bc.firebaseapp.com",
  databaseURL: "https://goals-268bc.firebaseio.com",
  projectId: "goals-268bc",
  storageBucket: "",
  messagingSenderId: "638650988654"
};

  export const firebaseApp = firebase.initializeApp(config);