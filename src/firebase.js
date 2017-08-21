import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDQ2EJEGzbzvkAkDj-pwP__-vWXWWNdJXg",
    authDomain: "goalcoach-1f8fc.firebaseapp.com",
    databaseURL: "https://goalcoach-1f8fc.firebaseio.com",
    projectId: "goalcoach-1f8fc",
    storageBucket: "goalcoach-1f8fc.appspot.com",
    messagingSenderId: "462310803648"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
/*export const goalRefTwo = firebase.database().ref('credentials');*/
export const completeGoalRef = firebase.database().ref('completeGoals');
