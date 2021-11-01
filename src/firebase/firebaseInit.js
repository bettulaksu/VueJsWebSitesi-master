import firebase from "@firebase/app"
import "@firebase/firestore"


var firebaseConfig = {
    apiKey: "AIzaSyCEhPXxXWnmwQn-fAylNXY8WjloxlQqUYw",
    authDomain: "fireblogsyt-f15ae.firebaseapp.com",
    projectId: "fireblogsyt-f15ae",
    storageBucket: "fireblogsyt-f15ae.appspot.com",
    messagingSenderId: "262796627385",
    appId: "1:262796627385:web:971cd0c8873c60b09d3a68"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp }
export default firebaseApp.firestore();