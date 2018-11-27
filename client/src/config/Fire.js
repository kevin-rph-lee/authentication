import firebase from 'firebase';
const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAmUvke72UOX3tOV0hGyxxNR2amr8gt7oI",
    authDomain: "react-express-skeleton.firebaseapp.com",
    databaseURL: "https://react-express-skeleton.firebaseio.com",
    projectId: "react-express-skeleton",
    storageBucket: "react-express-skeleton.appspot.com",
    messagingSenderId: "658223597445"
};
const fire = firebase.initializeApp(config);
export default fire;