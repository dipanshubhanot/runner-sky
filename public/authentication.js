function onSignIn(googleUser) {
  googleUser = gapi.auth2.init({
  client_id: '1054553981553-eqngoelh0gf6cje722to2qhh77p891vg.apps.googleusercontent.com',
  cookiepolicy: 'single_host_origin', /** Default value **/
  scope: 'profile'});
  console.log('ID: ' + googleUser.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Email: ' + googleUser.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
  var author2 = gapi.auth2.getAuthInstance();
  author2.signOut().then(function () {
  console.log('User signed out.');
});
}

function sendFirebaseRequest() {
  var options = new gapi.auth2.SigninOptionsBuilder(
    {'scope': 'firebase https://www.googleapis.com/auth/firebase.readonly'});
  console.log('seding requests!');
  newGoogleUser = auth2.currentUser.get(); 
  newGoogleUser.grant(options).then(
  function(success){
    console.log('Yahooooo!');
    console.log(JSON.stringify({message: "success", value: success}));
  },
  function(fail){
    alert(JSON.stringify({message: "fail", value: fail}));
  });
}