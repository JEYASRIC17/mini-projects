
document.getElementById("form-validation").addEventListener("submit",function(event){
    event.preventDefault()
let Username=document.getElementById("text").value
let Email=document.getElementById("email").value
let password=document.getElementById("password").value
let confirmpassword=document.getElementById("confirmpassword").value

let unameerror=document.getElementById("uname-error");
let mailerror=document.getElementById("mail-error");
let passworderror=document.getElementById("password-error");
let confirmpasserror=document.getElementById("confirmpassword-error")

let isValid=true;

let uNamepattern = /^[A-Za-z]+ [A-Za-z0-9]+$/;
let emailpattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/

if(Username=== "" ){
   unameerror.innerText="*name is required"
   isValid=false;
}
else if(!uNamepattern.test(Username)){
    unameerror.innerText="*Enter your fullname";
       isValid=false;
}
else if(uNamepattern.test(Username)){
    unameerror.innerText="";
    isValid=true;
}

if(Email=== "" ){
    mailerror.innerText="*Email is required"
       isValid=false;
}
else if(!emailpattern.test(Email)){
    mailerror.innerText="Enter a valid Email"
       isValid=false;
}
else if(emailpattern.test(Email)){
    mailerror.innerText=""
    isValid=true;
}


if(password=== "" ){
   passworderror .innerText="*Password is required"
      isValid=false;
}
else if(password.length<3 || password.length>10){
    passworderror.innerText="Enter password char between 3 and 10 "
       isValid=false;
}
else if(password.length>3 || password.length<10){
    passworderror.innerText=" "
    isValid=true;
}


if(confirmpassword=== "" ){
   confirmpasserror .innerText="*Password is required"
      isValid=false;
}
else if(confirmpassword!==password){
    confirmpasserror.innerText="Password is not Matched"
       isValid=false;
}
else if(confirmpassword==password){
    confirmpasserror.innerText=""
    isValid=true;
}

if(isValid){
    alert(`hi ${Username},Welcome to our Website`)
    console.log(Username,Email);
    
}

}
)

