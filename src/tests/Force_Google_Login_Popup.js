//  setCustomParameters on googleAuthProvider and set prompt to 'select_account' to force the pop up. See below


const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
 prompt: 'select_account'
});
export { firebase, googleAuthProvider, database as default };
