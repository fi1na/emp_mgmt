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
 
}