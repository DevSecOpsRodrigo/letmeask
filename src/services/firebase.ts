import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB8s760YcuM7_H1orjfoDASmH31FOrPwCY",
  authDomain: "letmeask-projeto-a2916.firebaseapp.com",
  databaseURL: "https://letmeask-projeto-a2916-default-rtdb.firebaseio.com",
  projectId: "letmeask-projeto-a2916",
  storageBucket: "letmeask-projeto-a2916.appspot.com",
  messagingSenderId: "230011109510",
  appId: "1:230011109510:web:68f979985c181dc15bd107"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
