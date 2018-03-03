import * as firebase from 'firebase';

// var to conceal Firebase db api keys
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

// Defines db and Google/Firebase authorization
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Prompt Google login account selction modal
googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
});

export { firebase, googleAuthProvider, database as default};