'use strict';

function pingAServer() {
    fetch('https://applicant-track.herokuapp.com/resumes')
      .then(response => response.json())
      // .then(data => console.log("result of getResume: ", data))
      .then(data => {})
      .catch(err => console.error(err));
}

function pingAClient() {
  fetch('https://applicant-tracker-react.herokuapp.com/index.html', { 
    mode: 'no-cors'
  })
  .then(data => {})
  // .then(data => console.log("result of app-tracker client: ", data))
  .catch(err => console.log(err));
}


function pingPServer() {
    fetch('https://modern-headshots-server.herokuapp.com/events')
    .then(response => response.json())
    // .then(data => console.log("result of photo server: ", data))
    .then(data => {})
    .catch(err => console.error(err));
}

function pingPClient() {
  fetch('https://modern-headshots.herokuapp.com/index.html', { 
    mode: 'no-cors'
  })
  .then(data => {})
  // .then(data => console.log("result of photo client: ", data))
  .catch(err => console.log(err));
}


// function pingPClient() {
//   fetch('https://quiet-crag-70668.herokuapp.com/index.html', { 
//     mode: 'no-cors'
//   })
//   .then(data => console.log("result of photo client: ", data))
//   .catch(err => console.log(err));
// }

function pingDyno() {
  pingAServer(); 
  pingAClient();
  pingPServer(); 
  pingPClient();

}