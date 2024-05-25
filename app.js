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

 var getUsers= JSON.parse(localStorage.getItem("users"))
 console.log(getUsers,"getUsers")

 if(getUsers==null)
   {
    var arr=[]
   arr.push(userObj)
  console.log("first user signup")
  localStorage.setItem("users",JSON.stringify(arr))
  
   }
   else{
      console.log("user signup")
      getUsers.push(userObj)
      localStorage.setItem("users",JSON.stringify(userObj))
   }
    alert("Registration successful!");
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;
    if (!loginEmail || !loginPassword) {
        console.error("All fields are required");
        alert("Please fill in all fields.");
        return;
    }
    var getUsers = JSON.parse(localStorage.getItem("users")) || [];
    var userFound = getUsers.find(user => user.email === loginEmail && user.password === loginPassword);

    if (userFound) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
});