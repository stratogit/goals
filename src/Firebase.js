import * as firebase from 'firebase';

var config = {
  apiKey: 
  authDomain: 
  databaseURL: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
};

  export const firebaseApp = firebase.initializeApp(config);
  
  export const goalRef = firebase.database().ref('goals');
  export const deleteGoalRef = firebase.database().ref('deleteGoals');