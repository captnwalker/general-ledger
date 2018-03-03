import { firebase, googleAuthProvider } from '../firebase/firebase';

// Capture login id
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

// Initiate Google login with a pop-up window
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

// Log user out of Firebase
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
