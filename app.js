function signUp(){
    var fullname=document.getElementById("fullname").value;
    var phonenumber=document.getElementById("phonenumber").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

 var userObj={
    fullname,
    phonenumber,
    email,
    password,
 }
 console.log(userObj)
}