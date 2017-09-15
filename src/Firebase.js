import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCI1lawoch8SXyHW49w_WcknbPQCBWBTfE",
    authDomain: "goals-243c7.firebaseapp.com",
    databaseURL: "https://goals-243c7.firebaseio.com",
    projectId: "goals-243c7",
    storageBucket: "",
    messagingSenderId: "1004224613219"
  };

  export const firebaseApp = firebase.initializeApp(config);