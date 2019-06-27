import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCGSDyScTYbNoirsv0jBBQS92lW0KSQXiM",
  authDomain: "chexinterface.firebaseapp.com",
  databaseURL: "https://chexinterface.firebaseio.com",
  projectId: "chexinterface",
  storageBucket: "chexinterface.appspot.com",
  messagingSenderId: "38611972927",
  appId: "1:38611972927:web:1f57c562f3abb41f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
}
