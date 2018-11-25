import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: process.env.API,
  authDomain: process.env.DOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
};
const fire = firebase.initializeApp(config);
export default fire;