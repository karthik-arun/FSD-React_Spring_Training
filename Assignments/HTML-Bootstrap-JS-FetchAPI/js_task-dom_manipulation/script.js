function getDetails(event){
    event.preventDefault();
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let phNum = document.getElementById("phNum").value;

  document.getElementById("userNameView").innerHTML = userName;
  document.getElementById("emailView").innerHTML = email;
  document.getElementById("phNumView").innerHTML = phNum;
  

}