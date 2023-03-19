import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {getDatabase,set,get,update,remove,ref,child} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyAMaCdQt6GKXOCb0i4I1CRYu6lAIGQ9VC0",
    authDomain: "rankings-5dc88.firebaseapp.com",
    databaseURL: "https://rankings-5dc88-default-rtdb.firebaseio.com",
    projectId: "rankings-5dc88",
    storageBucket: "rankings-5dc88.appspot.com",
    messagingSenderId: "646372389091",
    appId: "1:646372389091:web:9bef8963590191575dd5d6"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

var nameID = document.querySelector("#nameID");
var movieNameID = document.querySelector("#movieNameID");
var movieRatingID = document.querySelector("#movieRatingID");
var movieNameToWatch = document.querySelector("#movieNameToWatch");
  
function InsertData(){
    set(ref(db,"People/" + nameID.value),{
        MovieEntry: [movieNameID.value,movieRatingID.value]
    })
    .then(()=>{
        alert("Entry Added")
    })
    .catch((error)=>{
        alert(error)
    })
}

function UpdateWatchList(){
    
}

sendRankingData.addEventListener("click",InsertData);

sendWatchListData.addEventListener("click",UpdateWatchList);

