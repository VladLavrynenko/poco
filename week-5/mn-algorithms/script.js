/**
 * 1. login data will be submitted
 * 2. validate the password - check if the user exists (user "database" in JS)
 * 3. view for user is changing: e.g. logout or for "wrong password" message
 */

//list of user objects with name, email and the password of the user
let users = [
  {
      username: "Khalid",
      password: "test1234",
      email: "khalid@powercoders.org"
  },
  {
      username: "Shakir",
      password: "1234test",
      email: "shakir@powercoders.org"
  },
  {
      username: "Dominic",
      password: "thisIsAv3333rySafePWD!",
      email: "dominic@powercoders.org"
  }
];
const loginForm = document.querySelector("form");
loginForm.addEventListener("change",gatherUserInput);

function gatherUserInput(event){
  event.preventDefault();
  /*let formData = new FormData(loginForm);
  const data = Object.fromEntries(formData);
  console.table(data);*/
  let user = document.querySelector("#user").value;
  let pwd = document.querySelector("#pwd").value;
  checkIfLoginExists(user, pwd);
}

function checkIfLoginExists(loginUser, loginPwd){
  let userExists = false;
  //check if loginUser exists in array users
  users.forEach(function(user){
      if(user.email === loginUser){
          userExists = true;
          //if loginUser exists, check if its password is same than loginPwd
          if(user.password === loginPwd){
              //  if password is correct, call changeViewIfLoggedIn
              changeViewIfLoggedIn();
          } else {
              //  else call showErrorMessage
              showErrorMessage();
          }
      } 
  });
  //only after checking ALL objects in our loop, we can decide if the user exists or not
  // !userExists same as userExists !== true or userExists === false
  if(!userExists){
      //else loginUser does not exist, call showErrorMessage
      showErrorMessage();
  }
}

function changeViewIfLoggedIn(){
  console.log("Logged In");
}

function showErrorMessage(){
  console.log("Login not found");
}