'use strict';

function pingAServer() {
    fetch('https://applicant-track.herokuapp.com/resumes')
      .then(response => response.json())
      // .then(data => console.log("result of getResume: ", data))
      .then(data => {})
      .catch(err => console.error(err));
}



function pingPServer() {
    fetch('https://modern-headshots-server.herokuapp.com/events')
    .then(response => response.json())
    // .then(data => console.log("result of photo server: ", data))
    .then(data => {})
    .catch(err => console.error(err));
}

function pingPClient() {
  // var http = require("http");
  // http.get("https://modern-headshots.herokuapp.com");
  fetch('https://modern-headshots.herokuapp.com/', { 
    mode: 'no-cors'
    // ,
    // headers:{
    //   'Content-Type': 'application/json'
    // }
  })
  // .then(response => response.json())
  .then(data => console.log("result of photo client: ", data))
  .catch(err => console.log(err));
}

function pingDyno() {
  pingAServer(); 
  pingPServer(); 
  pingPClient();

}