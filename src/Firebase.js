import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDiJRyF3Qwx6yWUn1agcVYe4QogqogzHuo",
    authDomain: "ip-data-9c845.firebaseapp.com",
    databaseURL: "https://ip-data-9c845.firebaseio.com",
    projectId: "ip-data-9c845",
    storageBucket: "ip-data-9c845.appspot.com",
    messagingSenderId: "284033171396",
    appId: "1:284033171396:web:e77502ed26f1d9c5f8ee91"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;