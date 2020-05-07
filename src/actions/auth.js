import {firebase,googleAuthProvider} from '../firebase/firebase';


export const login = (uid) => ({
    type:'LOGIN',
    uid
})
export const startLogin = () =>{
    // i added this 2 line below, to ask for account everytime i click log in after logged out
    googleAuthProvider.setCustomParameters({
        'prompt': 'select_account'
    });
    return () =>{  //its a async function, read about it
     return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () =>({
    type: 'LOGOUT'
})

export const startLogOut = () => {

    return () =>{
        return firebase.auth().signOut();
    }
}