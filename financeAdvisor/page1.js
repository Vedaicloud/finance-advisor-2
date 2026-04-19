// SIGNUP

const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

let name = document.getElementById("name").value;

let email = document.getElementById("email").value;

let password = document.getElementById("password").value;

let user = {

name:name,

email:email,

password:password

};

localStorage.setItem("financeUser",JSON.stringify(user));

alert("Signup Successful!");

window.location="login.html";

});

}



// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let email = document.getElementById("loginEmail").value;

let password = document.getElementById("loginPassword").value;

let user = JSON.parse(localStorage.getItem("financeUser"));

if(user && email===user.email && password===user.password){

localStorage.setItem("loggedIn",true);

window.location="dashboard.html";

}else{

alert("Invalid Login");

}

});

}



// DASHBOARD USER

if(document.getElementById("userName")){

let user = JSON.parse(localStorage.getItem("financeUser"));

document.getElementById("userName").innerHTML="Hello "+user.name;

}



// LOGOUT

function logout(){

localStorage.removeItem("loggedIn");

window.location="login.html";

}