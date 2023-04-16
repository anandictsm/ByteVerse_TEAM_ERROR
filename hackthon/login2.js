function validate(){
    var Name=document.getElementById("Name").value;
    var Email=document.getElementById("Email").value;
    var password=document.getElementById("password").value;
    if(Name=="admin"&&password=="user"&& Email=="ananddhh@gmail.com"){
        alert("signup successfully");
        return false;
    }
    else{
        alert("signup failed");
    }
}