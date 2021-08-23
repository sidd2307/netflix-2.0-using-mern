import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAHnjgw0N0KHognu0gFm4WGljbzcnCgzX4",
    authDomain: "netflix-61a5e.firebaseapp.com",
    projectId: "netflix-61a5e",
    storageBucket: "netflix-61a5e.appspot.com",
    messagingSenderId: "100389207189",
    appId: "1:100389207189:web:20b80ebf329f14f99b6f9c",
    measurementId: "G-PQZ5P8M1HK"
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export default storage